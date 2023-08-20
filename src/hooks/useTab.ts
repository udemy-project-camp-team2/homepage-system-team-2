import { useState } from 'react';
import { ContentsType } from '../pages/ManagementPage';

export const useTab = (initialValue: number, contents: ContentsType[]) => {
	// if (!initialValue || !Array.isArray(contents)) return null;

	const [idx, setIdx] = useState(initialValue);

	return {
		idx,
		targetContent: contents[idx],
		targetAction: setIdx,
	};
};
