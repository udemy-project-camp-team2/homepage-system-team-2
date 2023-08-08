import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/common/Logo';
import styled from 'styled-components';
import HomeCarousel from '../components/home/HomeCarousel';
import HomeNavigation from '../components/home/HomeNavigation';

const Header = styled.header`
	width: 1170px;
	margin: 0 auto;
`;

const Home = () => {

	return (
		<Fragment>
			<Header>
				<Logo />
			</Header>
			<Link to="/admin">Admin</Link>
			<HomeNavigation />
			<HomeCarousel />
		</Fragment>
	);
};

export default Home;

