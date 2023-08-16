import { Fragment } from 'react';
import HomeCarousel from '../components/home/HomeCarousel';
import HomeNavigation from '../components/home/HomeNavigation';
import { useTitle } from '../hooks/useTitle';

const Home = () => {
	useTitle('메인 페이지');
	return (
		<Fragment>
			<HomeNavigation />
			<HomeCarousel />
		</Fragment>
	);
};

export default Home;
