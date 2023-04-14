import { ThemeAction, SET_THEME } from '../types';

// Set language
export const setTheme = (theme: string): ThemeAction => {
	localStorage.setItem('theme', theme);
	return {
		type: SET_THEME,
		payload: theme,
	};
};
