import { memo } from 'react';
import styled from 'styled-components';

const TableHead = styled.thead`
	background-color: ${(props) => props.theme.colors.gray.lighter};
`;

const Th = styled.th`
	padding: 1rem 0;
	border-bottom: 1px solid ${(props) => props.theme.colors.gray.darker};
`;

const PMTableHead = () => {
	return (
		<TableHead>
			<tr>
				<Th></Th>
				<Th>페이지명</Th>
				<Th>페이지 경로</Th>
				<Th>메뉴</Th>
				<Th>업데이트일시</Th>
				<Th>관리</Th>
			</tr>
		</TableHead>
	);
};

export default memo(PMTableHead);
