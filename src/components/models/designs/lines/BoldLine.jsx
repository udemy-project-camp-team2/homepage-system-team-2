import PropTypes from 'prop-types';

const BoldLine = ({ onClick }) => {
	return (
		<hr
			onClick={onClick}
			style={{ border: '1px sold #000', fontWeight: 'bold' }}
		/>
	);
};

export default BoldLine;

BoldLine.propTypes = {
	onClick: PropTypes.func,
};
