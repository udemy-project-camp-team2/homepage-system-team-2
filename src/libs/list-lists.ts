interface ListListsType {
	id: number;
	type: string;
	length: number;
	circle: boolean;
	src: string;
}

export const listLists: ListListsType[] = [
	{
		id: 1,
		type: 'circle_list',
		src: '/images/lists/list_design_style1.png',
		circle: true,
		length: 1,
	},
	{
		id: 2,
		type: 'rectangle1_list',
		src: '/images/lists/list_design_style2.png',
		circle: true,
		length: 1,
	},
	{
		id: 3,
		type: 'square_list',
		src: '/images/lists/list_design_style3.png',
		circle: true,
		length: 1,
	},
	{
		id: 4,
		type: 'rectangle2_list',
		src: '/images/lists/list_design_style4.png',
		circle: true,
		length: 1,
	},
];
