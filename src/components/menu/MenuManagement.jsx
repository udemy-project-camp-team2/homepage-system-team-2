import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import MenuManagementList from './MenuManagementList';
import MenuManagementInput from './MenuManagementInput';

const MenuManagement = () => {
	const lists = useSelector((state) => state.menu);

	const keys = useMemo(() => {
		return Object.keys(lists);
	}, [lists]);

	const detail = keys.map((list) => (
		<MenuManagementList key={list} title={list} lists={lists[list]} />
	));

	return (
		<section>
			<MenuManagementInput values={keys} />
			{detail}
		</section>
	);
};

export default MenuManagement;
