import PropTypes from 'prop-types';
import { memo } from 'react';
import { styled } from 'styled-components';

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

const PMPaignation = ({
	length,
	currentPage,
	setCurrentPage,
	changePageHandler,
}) => {
	const maxPage = Math.ceil(length / 10);
	return (
		<PaginationContainer>
			<PaginationArrowBtns
				disabled={currentPage === 1}
				type="button"
				name="prev"
				onClick={changePageHandler}
			>
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
				disabled={currentPage >= maxPage}
				type="button"
				name="next"
				onClick={changePageHandler}
			>
				&rarr;
			</PaginationArrowBtns>
		</PaginationContainer>
	);
};

export default memo(PMPaignation);

PMPaignation.propTypes = {
	length: PropTypes.number,
	currentPage: PropTypes.number,
	setCurrentPage: PropTypes.func,
	changePageHandler: PropTypes.func,
};
