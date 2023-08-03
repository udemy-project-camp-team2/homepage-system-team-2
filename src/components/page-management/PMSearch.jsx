import PropTypes from 'prop-types';

const PMSearch = ({ value, onChange }) => {
	return <input type="text" name="search" value={value} onChange={onChange} />;
};

export default PMSearch;

PMSearch.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};
