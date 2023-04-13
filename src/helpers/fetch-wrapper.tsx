import * as authActions from "../store/actions/authActions";
import store from "../store";

interface RequestOption {
  method: string;
  headers: { Authoriztion: string } | {};
  body: string;
}
export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method: string) {
  return (url: string, body: { [x: string]: string }) => {
    const requestOptions: RequestOption = {
      method,
      headers: authHeader(url),
      body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
  };
}

// helper functions

function authHeader(url: string) {
  // return auth header with jwt if user is logged in and request is to the api url
  const token = authToken();
  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL!);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

function authToken() {
  return store.getState().auth.user?.token;
}

function handleResponse(response: {
  text: () => Promise<any>;
  ok: any;
  status: number;
  statusText: any;
}) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && authToken()) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        const logout = () => store.dispatch(authActions.logout());
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
