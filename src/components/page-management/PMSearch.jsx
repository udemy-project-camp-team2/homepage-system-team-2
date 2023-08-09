import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center; 
`;

const Input = styled.input`
	width: 15rem;
	height: 40px;
	padding: 0.5rem;
	border: 1px solid ${(props) => props.theme.colors.orange};
	border-radius: 4px;
	margin-right: 0;
`;

const PMSearch = ({ value, onChange }) => {
	return (
		<SearchContainer>
			<Input type="text" name="search" value={value} onChange={onChange} placeholder="Search"/>
		</SearchContainer>
	);
};

export default PMSearch;

PMSearch.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};
