import { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Skeleton from './components/skeleton/skeleton';
import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const MainPage = lazy(() => import('./pages/MainPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ManagementPage = lazy(() => import('./pages/ManagementPage'));
const EditPageRoute = lazy(() => import('./pages/EditPageRoute'));
const EditPage = lazy(() => import('./pages/EditPage'));
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
	return (
		<Router>
			<Suspense fallback={<Skeleton />}>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:id" element={<MainPage />} />
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
							element={<LoggedOutRoute element={<EditPage />} />}
						/>
						<Route path="/404" element={<NotFound />} />
						<Route path="*" element={<Navigate to="/404" />} />
					</Routes>
				</Layout>
			</Suspense>
		</Router>
	);
};

export default App;
