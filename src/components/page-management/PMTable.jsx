import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const PageManagementTable = styled.table`
	margin: 2rem 0;
	width: 100%;
	border-top: 1px solid ${(props) => props.theme.colors.gray.darker};
	border-collapse: collapse;
`;

const PMTable = ({ children }) => {
	return <PageManagementTable>{children}</PageManagementTable>;
};

export default PMTable;

PMTable.propTypes = {
	children: PropTypes.node,
};
