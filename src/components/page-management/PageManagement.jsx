import { useState, useCallback } from 'react';
import { menuLists } from '../../libs/menu-lists';
import PMTable from './PMTable';
import PMTableHead from './PMTableHead';
import PMTableBody from './PMTableBody';
import PMPaignation from './PMPaignation';

const pageLists = Object.entries(menuLists)
	.map(([key, value]) => {
		value.forEach((item) => (item['key'] = key));
		return value;
	})
	.reduce((acc, cur) => acc.concat(cur));

const PageManagement = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const offset = (currentPage - 1) * 10;

	const changePageHandler = useCallback((e) => {
		const { name } = e.target;
		if (name === 'prev') {
			setCurrentPage((prev) => {
				if (prev <= 1) return;
				return prev - 1;
			});
		} else if (name === 'next') {
			setCurrentPage((prev) => prev + 1);
		}
	}, []);

	return (
		<section>
			<PMTable>
				<PMTableHead />
				<PMTableBody pageLists={pageLists} offset={offset} />
			</PMTable>
			<PMPaignation
				length={pageLists.length}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				changePageHandler={changePageHandler}
			/>
		</section>
	);
};

export default PageManagement;
