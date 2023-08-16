interface LineListsType {
	id: number;
	type: string;
	length: number;
	src: string;
}

export const lineLists: LineListsType[] = [
	{
		id: 1,
		type: 'simple-line',
		// style: 'solid',
		src: '/images/lines/simple_line.png',
		length: 1,
	},
	{
		id: 2,
		type: 'dashed-line',
		// style: 'dashed',
		src: '/images/lines/dashed_line.png',
		length: 1,
	},
	{
		id: 3,
		type: 'dotted-line',
		// style: 'dotted',
		src: '/images/lines/dotted_line.png',
		length: 1,
	},
];
