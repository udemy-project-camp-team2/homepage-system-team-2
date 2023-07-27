import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import StyledProvider from './styles/StyledProvider';

const root = createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<StyledProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</StyledProvider>
	</StrictMode>
);
