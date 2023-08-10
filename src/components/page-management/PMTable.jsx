import PropTypes from 'prop-types';
import { styled } from 'styled-components';

<<<<<<< HEAD
const TableContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
`;
const PageTable = styled.table`
	width: 100%;
	margin-top: 2rem;
	text-align: center;
	border-spacing: 0px;

	th {
		background-color: #f3f3f3;
		padding: 1rem 0;
		border-bottom: 1px solid ${(props) => props.theme.colors.gray.darker};
	}

	td {
		padding: 1rem 0;
		border-bottom: 1px solid ${(props) => props.theme.colors.gray.darker};
	}

	td span {
		padding: 0.3rem .8rem;
		border-radius: 50px;
		color: #fff;
		font-weight: bold;
		background-color: ${(props) => props.theme.colors.gray.lighter};
	}
`;

const PMTable = ({ children }) => {
	return (
		<TableContainer>
			<PageTable>{children}</PageTable>
		</TableContainer>
	);
=======
const PageManagementTable = styled.table`
	margin: 2rem 0;
	width: 100%;
	border-top: 1px solid ${(props) => props.theme.colors.gray.darker};
	border-collapse: collapse;
`;

const PMTable = ({ children }) => {
	return <PageManagementTable>{children}</PageManagementTable>;
>>>>>>> 8a7880309b9cbbe73308183c302b07c8b1e3f7af
};

export default PMTable;

PMTable.propTypes = {
	children: PropTypes.node,
};
