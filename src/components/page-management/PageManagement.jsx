import { useState, useCallback, useMemo } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { menuLists } from '../../libs/menu-lists';
import PMTable from './PMTable';
import PMTableHead from './PMTableHead';
import PMTableBody from './PMTableBody';
import PMPaignation from './PMPaignation';
import PMSearch from './PMSearch';

const PageManagement = () => {
	const [search, setSearch] = useState('');
	const debouncedValue = useDebounce(search, 500);
	const [currentPage, setCurrentPage] = useState(1);
	const offset = (currentPage - 1) * 10;

	const changeInputHandler = useCallback((e) => {
		setSearch(e.target.value);
	}, []);

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

	const pageLists = useMemo(() => {
		return Object.entries(menuLists)
			.map(([key, value]) => {
				value.forEach((item) => (item['key'] = key));
				return value;
			})
			.reduce((acc, cur) => acc.concat(cur))
			.filter((item) =>
				item.title.toLowerCase().includes(debouncedValue.toLowerCase())
			);
	}, [debouncedValue]);

	return (
		<section>
			<PMSearch value={search} onChange={changeInputHandler} />
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