import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StyledProvider from './styles/StyledProvider';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<StyledProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</StyledProvider>
	</React.StrictMode>
);
