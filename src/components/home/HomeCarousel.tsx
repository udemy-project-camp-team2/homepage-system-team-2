import styled from 'styled-components';
import { useCarousel } from '../../hooks/useCarousel';
import HomeCarouselBtnContainer from './HomeCarouselBtnContainer';
import HomeCarouselContainer from './HomeCarouselContainer';

const CarouselWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	overflow-x: hidden;
`;

const HomeCarousel = () => {
	const { currentIndex, toggleCarouselHandler, carouselHandler } =
		useCarousel(images);

	return (
		<article>
			<CarouselWrapper>
				<HomeCarouselContainer currentIndex={currentIndex} images={images} />
				<HomeCarouselBtnContainer
					carouselHandler={carouselHandler}
					toggleCarouselHandler={toggleCarouselHandler}
				/>
			</CarouselWrapper>
		</article>
	);
};

export default HomeCarousel;

const images = [
	{
		id: 1,
		src: '/images/carousel/books.jpg',
		alt: 'books',
	},
	{
		id: 2,
		src: '/images/carousel/code.jpg',
		alt: 'code',
	},
	{
		id: 3,
		src: '/images/carousel/study.jpg',
		alt: 'study',
	},
];
