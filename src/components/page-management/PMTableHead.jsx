import { memo } from 'react';

const PMTableHead = () => {
	return (
		<thead>
			<tr>
				<th></th>
				<th>페이지명</th>
				<th>페이지 경로</th>
				<th>메뉴</th>
				<th>업데이트일시</th>
				<th>관리</th>
			</tr>
		</thead>
	);
};

export default memo(PMTableHead);
