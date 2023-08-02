import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ManagementPage from './pages/ManagementPage';
import EditPage from './pages/EditPage';
import PrivateRoute from './components/login/PriveRoute';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={'/admin'} element={<LoginPage />} />
				<Route path={'/admin/management'} element={ <PrivateRoute element={<ManagementPage />}/> } />
				<Route path={'/admin/edit'} element={<PrivateRoute element={<EditPage />} />} />
				<Route path='/*' element={<NotFound />}/>
			</Routes>
		</Router>
	);
};

export default App;
