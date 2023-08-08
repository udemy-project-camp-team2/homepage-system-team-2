import { Fragment } from 'react';
import HomeCarousel from '../components/home/HomeCarousel';
import HomeNavigation from '../components/home/HomeNavigation';

const Home = () => {
	return (
		<Fragment>
			<HomeNavigation />
			<HomeCarousel />
		</Fragment>
	);
};

export default Home;
