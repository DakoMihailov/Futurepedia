import { SET_LANGUAGE, LanguageAction, LanguageState } from '../types';

const localStorageLang = localStorage.getItem('language');

const initialState: LanguageState = {
	language: localStorageLang ? localStorageLang : 'US',
};

const languageReducer = (state = initialState, action: LanguageAction) => {
	switch (action.type) {
		case SET_LANGUAGE:
			return {
				...state,
				language: action.payload,
			};
		default:
			return state;
	}
};

export default languageReducer;
