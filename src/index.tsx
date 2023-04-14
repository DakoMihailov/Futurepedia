import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const root = createRoot(document.getElementById('root') as HTMLElement);
document.querySelector('body')!.style.backgroundColor = 'rgb(55, 65, 81)';
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
