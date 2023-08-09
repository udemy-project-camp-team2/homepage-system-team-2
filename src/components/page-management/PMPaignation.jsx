import PropTypes from 'prop-types';
import { memo } from 'react';
import { styled } from 'styled-components';

const PaignationContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center; 
`;

const PaginationButton = styled.button`
	padding: 0 .8rem;
	height: 2rem;
	border:1px solid ${(props) => props.active ? props.theme.colors.orange : props.theme.colors.gray.lighter};
  background-color: ${props => props.active ? props.theme.colors.orange : 'white'};
  color: ${props => props.active ? 'white' : 'black'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;


const PMPaignation = ({
	length,
	currentPage,
	setCurrentPage,
	changePageHandler,
}) => {
	const maxPage = Math.ceil(length / 10);
	return (
		<PaignationContainer>
			<PaginationButton
				disabled={currentPage === 1}
				type="button"
				name="prev"
				onClick={changePageHandler}
			>
				이전
			</PaginationButton>
			{Array.from({ length: maxPage }, (_, i) => i + 1).map((item) => (
				<PaginationButton 
					key={item} 
					type="button" 
					onClick={() => setCurrentPage(item)}
					active={item === currentPage}
				>
					{item}
				</PaginationButton>
			))}
			<PaginationButton
				disabled={currentPage >= maxPage}
				type="button"
				name="next"
				onClick={changePageHandler}
			>
				다음
			</PaginationButton>
		</PaignationContainer>
	);
};

export default memo(PMPaignation);

PMPaignation.propTypes = {
	length: PropTypes.number,
	currentPage: PropTypes.number,
	setCurrentPage: PropTypes.func,
	changePageHandler: PropTypes.func,
};
