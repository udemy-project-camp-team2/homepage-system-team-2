import { Fragment } from 'react';
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
			<HomeNavigation />
			<HomeCarousel />
		</Fragment>
	);
};

export default Home;

