import { useSelector } from '../../store/hooks';
import { Navigate } from 'react-router';

// 로그인 전에 관리,편집 페이지 접속시 로그인으로 이동
export const LoggedOutRoute = ({ element }: { element: JSX.Element }) => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	// 로그인 상태에 따라 리디렉션을 처리
	return isLoggedIn ? element : <Navigate to="/admin/" />;
};

// 로그인 후에 로그인 페이지 접속 시 관리 페이지로 이동
export const LoggedInRoute = ({ element }: { element: JSX.Element }) => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	// 로그인 상태에 따라 리디렉션을 처리
	return isLoggedIn ? <Navigate to="/admin/management" /> : element;
};
