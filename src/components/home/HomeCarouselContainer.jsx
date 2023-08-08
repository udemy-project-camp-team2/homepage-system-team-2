import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	list-style-type: none;
	transition: transform 0.2s linear;
`;

const CarouselImg = styled.img`
	width: 100%;
	display: block;
	flex: none;
	object-fit: cover;
`;

const HomeCarouselContainer = ({ currentIndex, images }) => {
	return (
		<CarouselContainer
			style={{
				transform: `translateX(-${currentIndex * 100}%)`,
			}}
		>
			{images.map((image) => (
				<CarouselImg key={image.alt} src={image.src} alt={image.alt} />
			))}
		</CarouselContainer>
	);
};

export default HomeCarouselContainer;

HomeCarouselContainer.propTypes = {
	currentIndex: PropTypes.number,
	images: PropTypes.array,
};
