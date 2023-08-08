import { useCallback, useEffect, useState } from 'react';

export const useCarousel = (images) => {
	const [isPaused, setIsPaused] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const callback = () => {
			setCurrentIndex((prev) => {
				if (isPaused) {
					return prev;
				}

				if (!isPaused) {
					if (prev >= images.length - 1) {
						return 0;
					}
					return prev + 1;
				}
			});
		};

		const timer = setTimeout(callback, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, [currentIndex]);

	const carouselHandler = useCallback(
		(e) => {
			const { name } = e.target;

			if (name === 'prev') {
				// 왼쪽
				if (currentIndex <= 0) {
					setCurrentIndex(images.length - 1);
					return;
				}
				setCurrentIndex((prev) => prev - 1);
			}

			if (name === 'next') {
				// 오른쪽
				if (currentIndex >= images.length - 1) {
					setCurrentIndex(0);
					return;
				}
				setCurrentIndex((prev) => prev + 1);
			}
		},
		[currentIndex, isPaused]
	);

	const toggleCarouselHandler = useCallback(() => {
		setIsPaused((prev) => !prev);
	}, []);

	return {
		currentIndex,
		toggleCarouselHandler,
		carouselHandler,
	};
};
