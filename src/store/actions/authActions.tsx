import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";
const baseUrl = `api`;

export const login =
  (username: string, password: string) =>
  (dispatch: (arg0: { type: string; payload?: object }) => void) => {
    return fetchWrapper
      .post(`${baseUrl}/login`, { username, password })
      .then((user: object) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: user,
        });
        return Promise.resolve();
      })
      .catch(() => {
        dispatch({
          type: LOGIN_FAIL,
        });
        return Promise.reject();
      });
  };

export const logout = () => (dispatch: (arg0: { type: string }) => void) => {
  dispatch({
    type: LOGOUT,
  });
};
