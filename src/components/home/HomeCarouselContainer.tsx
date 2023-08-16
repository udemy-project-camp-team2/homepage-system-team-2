import styled from 'styled-components';

interface HomeCarouselContainerProps {
	currentIndex: number;
	images: {
		id: number;
		src: string;
		alt: string;
	}[];
}

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

const HomeCarouselContainer = ({
	currentIndex,
	images,
}: HomeCarouselContainerProps) => {
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
