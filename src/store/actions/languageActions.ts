import { LanguageAction, SET_LANGUAGE } from '../types';

// Set language
export const setLanguage = (lang: string): LanguageAction => {
	localStorage.setItem('language', lang);
	return {
		type: SET_LANGUAGE,
		payload: lang,
	};
};
