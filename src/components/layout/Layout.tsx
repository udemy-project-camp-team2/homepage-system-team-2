import PropTypes from 'prop-types';
import { Fragment } from 'react';
import type { ReactNode } from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<Fragment>
			<Header />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;

Layout.propTypes = {
	children: PropTypes.node,
};
