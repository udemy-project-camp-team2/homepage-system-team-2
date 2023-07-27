import PropTypes from 'prop-types';

const DashedLine = () => {
	return <hr style={{ border: '1px dashed #000' }} />;
};

export default DashedLine;

DashedLine.propTypes = {
	onClick: PropTypes.func,
};
