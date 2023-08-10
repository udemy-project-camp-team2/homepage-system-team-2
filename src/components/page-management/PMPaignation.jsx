import PropTypes from 'prop-types';
import { memo } from 'react';
import { styled } from 'styled-components';

<<<<<<< HEAD
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

=======
const PaginationContainer = styled.div`
	margin: 0 auto;
	width: 60%;
	text-align: center;
`;

const PaginationBtns = styled.button`
	background-color: transparent;
	width: 3rem;
	height: 2rem;
	border: 1px solid ${(props) => props.theme.colors.gray.darker};
	border-radius: 0.5rem;
	outline: none;
	cursor: pointer;
`;

const PaginationArrowBtns = styled(PaginationBtns)`
	margin: 0 2rem;

	&[disabled] {
		cursor: not-allowed;
	}
`;

const PaginationNumberBtns = styled(PaginationBtns)`
	margin: 0 0.5rem;

	&[aria-current] {
		background-color: ${(props) => props.theme.colors.orange};
		color: #fff;
		border: 1px solid ${(props) => props.theme.colors.orange};
	}
`;
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af

const PMPaignation = ({
	length,
	currentPage,
	setCurrentPage,
	changePageHandler,
}) => {
	const maxPage = Math.ceil(length / 10);
	return (
<<<<<<< HEAD
		<PaignationContainer>
			<PaginationButton
=======
		<PaginationContainer>
			<PaginationArrowBtns
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af
				disabled={currentPage === 1}
				type="button"
				name="prev"
				onClick={changePageHandler}
			>
<<<<<<< HEAD
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
=======
				&larr;
			</PaginationArrowBtns>
			{Array.from({ length: maxPage }, (_, i) => i + 1).map((item) => (
				<PaginationNumberBtns
					key={item}
					type="button"
					onClick={() => {
						if (currentPage === item) {
							return;
						}
						setCurrentPage(item);
					}}
					aria-current={currentPage === item ? 'page' : null}
				>
					{item}
				</PaginationNumberBtns>
			))}
			<PaginationArrowBtns
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af
				disabled={currentPage >= maxPage}
				type="button"
				name="next"
				onClick={changePageHandler}
			>
<<<<<<< HEAD
				다음
			</PaginationButton>
		</PaignationContainer>
=======
				&rarr;
			</PaginationArrowBtns>
		</PaginationContainer>
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af
	);
};

export default memo(PMPaignation);

PMPaignation.propTypes = {
	length: PropTypes.number,
	currentPage: PropTypes.number,
	setCurrentPage: PropTypes.func,
	changePageHandler: PropTypes.func,
};
