import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageReducer";
import themeReducer from "./reducers/themeReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  lang: languageReducer,
  theme: themeReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
