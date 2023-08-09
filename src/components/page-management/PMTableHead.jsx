import { memo } from 'react';
import styled from 'styled-components';

const Th = styled.th`
	padding: 0.5rem 0;
	border-bottom: 1px solid ${(props) => props.theme.colors.gray.darker};
`;

const PMTableHead = () => {
	return (
		<thead>
			<tr>
				<Th></Th>
				<Th>페이지명</Th>
				<Th>페이지 경로</Th>
				<Th>메뉴</Th>
				<Th>업데이트일시</Th>
				<Th>관리</Th>
			</tr>
		</thead>
	);
};

export default memo(PMTableHead);
