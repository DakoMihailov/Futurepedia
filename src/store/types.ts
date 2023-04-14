export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_THEME = 'SET_THEME';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export interface LanguageState {
	language: string;
}

interface SetLanguageAction {
	type: typeof SET_LANGUAGE;
	payload: string;
}

export type LanguageAction = SetLanguageAction;

export interface ThemeState {
	theme: string;
}

interface SetThemeAction {
	type: typeof SET_THEME;
	payload: string;
}

export type ThemeAction = SetThemeAction;
