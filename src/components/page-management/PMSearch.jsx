import PropTypes from 'prop-types';
<<<<<<< HEAD
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
=======
import { styled } from 'styled-components';

const PageManagementSearchInput = styled.input`
	padding: 0 1rem;
	margin: 0 auto;
	width: 60%;
	height: 2rem;
	display: block;
	border: none;
	border-radius: 0.5rem;
	outline: none;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

	&:focus {
		border: 2px solid ${(props) => props.theme.colors.orange};
	}
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af
`;

const PMSearch = ({ value, onChange }) => {
	return (
<<<<<<< HEAD
		<SearchContainer>
			<Input type="text" name="search" value={value} onChange={onChange} placeholder="Search"/>
		</SearchContainer>
=======
		<PageManagementSearchInput
			type="text"
			name="search"
			value={value}
			onChange={onChange}
			autoComplete="off"
		/>
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af
	);
};

export default PMSearch;

PMSearch.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};
