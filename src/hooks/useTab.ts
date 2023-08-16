import { useState } from 'react';

export const useTab = (initialValue: number, contents: any) => {
	// if (!initialValue || !Array.isArray(contents)) return null;

	const [idx, setIdx] = useState(initialValue);

	return {
		idx,
		targetContent: contents[idx],
		targetAction: setIdx,
	};
};
