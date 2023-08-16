import { useEffect } from 'react';

export const useTitle = (mainTitle: string, subTitle?: string) => {
	useEffect(() => {
		document.title = mainTitle;

		return () => {
			if (subTitle) {
				document.title = subTitle;
			}
		};
	}, [mainTitle]);
};
