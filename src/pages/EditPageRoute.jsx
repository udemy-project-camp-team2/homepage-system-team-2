import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router';
import EditPage from './EditPage';

// /admin/edit/id  id 위치에 불필요한 값들이 들어간 url 접근 제한
const EditPageRoute = () => {
	const { id } = useParams();
	const savedURLs = JSON.parse(localStorage.getItem('url'));
	const idAsNumber = parseInt(id, 10);

	if (savedURLs.includes(idAsNumber)) {
		return <EditPage />;
	} else {
		return <Navigate to="/*" />;
	}
};

export default EditPageRoute;
