interface LayoutListsType {
	id: number;
	type: string;
	length: number;
	src: string;
}

export const layoutLists: LayoutListsType[] = [
	{
		id: 1,
		type: 'one_row_layout',
		length: 1,
		src: '/images/layouts/one_row_layout.png',
	},
	{
		id: 2,
		type: 'two_row_layout',
		length: 2,
		src: '/images/layouts/two_row_layout.png',
	},
	{
		id: 3,
		type: 'three_row_layout',
		length: 3,
		src: '/images/layouts/three_row_layout.png',
	},
	{
		id: 4,
		type: 'four_row_layout',
		length: 4,
		src: '/images/layouts/four_row_layout.png',
	},
];
