import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
	faPause,
} from '@fortawesome/free-solid-svg-icons';

const ButtonContainer = styled.div`
	position: absolute;
	left: 20%;
	bottom: 20%;
	display: flex;
	justify-content: space-between;
	transform: translateY(-50%);

	svg {
		margin: 0 1rem;
		font-size: 2rem;
		color: #fff;
		cursor: pointer;
		pointer-events: none;
	}

	button {
		background-color: transparent;
		border: none;
		outline: none;
	}
`;

const HomeCarouselBtnContainer = ({
	carouselHandler,
	toggleCarouselHandler,
}) => {
	return (
		<ButtonContainer>
			<button name="prev" onClick={carouselHandler}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<button type="button" onClick={toggleCarouselHandler}>
				<FontAwesomeIcon icon={faPause} />
			</button>
			<button name="next" onClick={carouselHandler}>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</ButtonContainer>
	);
};

export default HomeCarouselBtnContainer;

HomeCarouselBtnContainer.propTypes = {
	carouselHandler: PropTypes.func,
	toggleCarouselHandler: PropTypes.func,
};