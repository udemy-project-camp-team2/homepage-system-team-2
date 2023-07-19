import { Fragment } from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
