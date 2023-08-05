import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ManagementPage from './pages/ManagementPage';
import NotFound from './pages/NotFound';
import EditPageRoute from './pages/EditPageRoute';
import { LoggedInRoute, LoggedOutRoute } from './components/login/PriveRoute';

const App = () => {
	return (
		<Router>
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
		</Router>
	);
};

export default App;
