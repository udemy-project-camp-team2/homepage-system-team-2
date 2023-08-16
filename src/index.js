import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import StyledProvider from './styles/StyledProvider';
import store from './store';
import { login } from './store/slices/userSlice';

// 로컬 스토리지에서 유저정보를 불러와 스토어에 저장
const userFormLocalStorage = JSON.parse(localStorage.getItem('user'));
if (userFormLocalStorage) {
	store.dispatch(login(userFormLocalStorage));
}

const root = createRoot(document.getElementById('root'));
root.render(
	<StyledProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</StyledProvider>
);
