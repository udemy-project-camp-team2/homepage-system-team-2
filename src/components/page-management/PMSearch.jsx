import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const PageManagementSearchInput = styled.input`
	padding: 0.8rem;
	margin: 0 auto;
	width: 60%;
	height: 2.8rem;
	display: block;
	border: none;
	border-radius: 0.5rem;
	outline: none;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

	&:focus {
		border: 2px solid ${(props) => props.theme.colors.orange};
	}
`;

const PMSearch = ({ value, onChange }) => {
	return (
		<PageManagementSearchInput
			type="text"
			name="search"
			value={value}
			onChange={onChange}
			autoComplete="off"
			placeholder="Search"
		/>
	);
};

export default PMSearch;

PMSearch.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};
