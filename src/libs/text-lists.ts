interface TextListsType {
	id: number;
	type: string;
	length: number;
	src: string;
}

export const textLists: TextListsType[] = [
	{
		id: 1,
		type: 'plain_text',
		length: 1,
		src: '/images/texts/plain_text.png',
	},
	{
		id: 2,
		type: 'bold_text',
		length: 1,
		src: '/images/texts/bold_text.png',
	},
];
