import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
	faPause,
} from '@fortawesome/free-solid-svg-icons';

interface HomeCarouselBtnContainerProps {
	carouselHandler: (e: any) => void;
	toggleCarouselHandler: () => void;
}

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
		pointer-events: none;
	}

	button {
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
	}
`;

const HomeCarouselBtnContainer = ({
	carouselHandler,
	toggleCarouselHandler,
}: HomeCarouselBtnContainerProps) => {
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
