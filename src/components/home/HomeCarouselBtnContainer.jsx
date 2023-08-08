import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.div`
	position: absolute;
	left: 20%;
	bottom: 20%;
	display: flex;
	justify-content: space-between;
	transform: translateY(-50%);
`;

const HomeCarouselBtnContainer = ({
	carouselHandler,
	toggleCarouselHandler,
}) => {
	return (
		<ButtonContainer>
			<button type="button" name="prev" onClick={carouselHandler}>
				Left
			</button>
			<button onClick={toggleCarouselHandler}>중지</button>
			<button type="button" name="next" onClick={carouselHandler}>
				Right
			</button>
		</ButtonContainer>
	);
};

export default HomeCarouselBtnContainer;

HomeCarouselBtnContainer.propTypes = {
	carouselHandler: PropTypes.func,
	toggleCarouselHandler: PropTypes.func,
};
