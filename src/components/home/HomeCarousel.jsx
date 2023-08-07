import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCarousel } from '../../hooks/useCarousel';

const CarouselWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	overflow-x: hidden;
`;

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

const ButtonContainer = styled.div`
	position: absolute;
	left: 20%;
	bottom: 20%;
	display: flex;
	justify-content: space-between;
	transform: translateY(-50%);
`;

const HomeCarousel = () => {
	const { currentIndex, setIsPaused, carouselHandler } = useCarousel(images);

	return (
		<article>
			<CarouselWrapper>
				<CarouselContainer
					style={{
						transform: `translateX(-${currentIndex * 100}%)`,
					}}
				>
					{images.map((image) => (
						<CarouselImg key={image.alt} src={image.src} alt={image.alt} />
					))}
				</CarouselContainer>
				<ButtonContainer>
					<button type="button" name="prev" onClick={carouselHandler}>
						Left
					</button>
					<button onClick={() => setIsPaused((prev) => !prev)}>중지</button>
					<button type="button" name="next" onClick={carouselHandler}>
						Right
					</button>
				</ButtonContainer>
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
