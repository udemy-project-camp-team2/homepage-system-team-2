import PropTypes from 'prop-types';

const PMTable = ({ children }) => {
	return <table>{children}</table>;
};

export default PMTable;

PMTable.propTypes = {
	children: PropTypes.node,
};
