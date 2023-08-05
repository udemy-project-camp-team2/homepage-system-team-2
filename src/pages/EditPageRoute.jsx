import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router';
import EditPage from './EditPage';

// /admin/edit/id  id 위치에 불필요한 값들이 들어간 url 접근 제한
const EditPageRoute = () => {
	const { id } = useParams();
	const savedURLs = JSON.parse(localStorage.getItem('url'));
	const idAsNumber = parseInt(id, 10);

	// id 값들을 로컬스토리지에 저장
	useEffect(() => {
		localStorage.setItem('url', JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]));
	}, []);

	if (savedURLs.includes(idAsNumber)) {
		return <EditPage />;
	} else {
		return <Navigate to="/*" />;
	}
};

export default EditPageRoute;
