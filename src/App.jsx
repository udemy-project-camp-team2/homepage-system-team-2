import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ManagementPage from './pages/ManagementPage';
import EditPage from './pages/EditPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={'/admin'} element={<LoginPage />} />
				<Route path={'/admin/management'} element={<ManagementPage />} />
				<Route path={'/admin/edit'} element={<EditPage />} />
			</Routes>
		</Router>
	);
};

export default App;
