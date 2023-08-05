import { useEffect, lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Skeleton from './components/skeleton/skeleton';
const Home = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ManagementPage = lazy(() => import('./pages/ManagementPage'));
const EditPageRoute = lazy(() => import('./pages/EditPageRoute'));
const NotFound = lazy(() => import('./pages/NotFound'));
const LoggedInRoute = lazy(() =>
	import('./components/login/PriveRoute').then((module) => ({
		default: module.LoggedInRoute,
	}))
);
const LoggedOutRoute = lazy(() =>
	import('./components/login/PriveRoute').then((module) => ({
		default: module.LoggedOutRoute,
	}))
);

const App = () => {
	// id 값들을 로컬스토리지에 저장
	useEffect(() => {
		localStorage.setItem('url', JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]));
	}, []);
	return (
		<Router>
			<Suspense fallback={<Skeleton />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path={'/admin'}
						element={<LoggedInRoute element={<LoginPage />} />}
					/>
					<Route
						path={'/admin/management'}
						element={<LoggedOutRoute element={<ManagementPage />} />}
					/>
					<Route
						path={'/admin/edit/:id'}
						element={<LoggedOutRoute element={<EditPageRoute />} />}
					/>
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
