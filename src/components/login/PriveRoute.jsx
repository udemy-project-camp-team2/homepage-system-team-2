import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ element, path }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    
    // 로그인 상태에 따라 리디렉션을 처리
    return isLoggedIn ? element : <Navigate to="/admin/" />;
  };

  export default PrivateRoute;

  PrivateRoute.propTypes = {
	element: PropTypes.element,
	path: PropTypes.string
};