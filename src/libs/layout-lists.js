import { v4 as uuidv4 } from 'uuid';

export const layoutLists = [
	{
		id: uuidv4(),
		type: 'one_row_layout',
		length: 1,
	},
	{
		id: uuidv4(),
		type: 'two_row_layout',
		length: 2,
	},
	{
		id: uuidv4(),
		type: 'four_row_layout',
		length: 4,
	},
	{
		id: uuidv4(),
		type: 'three_mix_layout',
		length: 3,
	},
	{
		id: uuidv4(),
		type: 'four_mix_layout',
		length: 4,
	},
];
