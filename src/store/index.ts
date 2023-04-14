import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './reducers/languageReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
	lang: languageReducer,
	theme: themeReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
