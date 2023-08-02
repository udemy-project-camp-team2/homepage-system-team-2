import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StyledProvider from './styles/StyledProvider';
import { Provider } from 'react-redux';
import store from './store';
import { login } from './store/slices/userSlice'

// 로컬 스토리지에서 유저정보를 불러와 스토어에 저장
const userFormLocalStorage = JSON.parse(localStorage.getItem('user'));
if(userFormLocalStorage) {
	store.dispatch(login(userFormLocalStorage));
}

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
