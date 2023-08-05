import { useEffect } from 'react';

export const useTitle = (mainTitle, subTitle) => {
	useEffect(() => {
		document.title = mainTitle;

		return () => {
			document.title = subTitle;
		};
	}, [mainTitle]);
};
