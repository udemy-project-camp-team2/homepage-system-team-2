import ImageTab from '../components/tab/ImageTab';
import LayoutTab from '../components/tab/LayoutTab';
import LineTab from '../components/tab/LineTab';
import TextTab from '../components/tab/TextTab';

interface TabListsType {
	id: number;
	label: string;
}

export const tabLists: TabListsType[] = [
	{
		id: 0,
		label: 'layout',
		// element: <LayoutTab />
	},
	{
		id: 1,
		label: 'image',
		// element: <ImageTab />
	},
	{
		id: 2,
		label: 'line',
		// element: <LineTab />
	},
	{
		id: 3,
		label: 'text',
		// element: <TextTab />
	},
];
