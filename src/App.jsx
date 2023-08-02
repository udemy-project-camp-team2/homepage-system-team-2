import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ManagementPage from './pages/ManagementPage';
import EditPage from './pages/EditPage';
import NotFound from './pages/NotFound';
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
					path={'/admin/edit'}
					element={<LoggedOutRoute element={<EditPage />} />}
				/>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
