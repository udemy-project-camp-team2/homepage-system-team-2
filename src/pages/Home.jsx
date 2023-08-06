import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/common/Logo';

const Home = () => {
	return (
		<Fragment>
			<Logo />
			<Link to="/admin">Admin</Link>
		</Fragment>
	);
};

export default Home;
