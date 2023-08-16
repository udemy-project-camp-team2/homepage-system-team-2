import type { ReactNode } from 'react';
import { styled } from 'styled-components';

interface PMTableProps {
	children: ReactNode;
}

const PageManagementTable = styled.table`
	margin: 2rem 0;
	width: 100%;
	border-top: 1px solid ${(props) => props.theme.colors.gray.darker};
	border-collapse: collapse;
`;

const PMTable = ({ children }: PMTableProps) => {
	return <PageManagementTable>{children}</PageManagementTable>;
};

export default PMTable;
