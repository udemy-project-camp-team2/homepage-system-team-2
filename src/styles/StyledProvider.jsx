import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';

const StyledProvider = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export default StyledProvider;

StyledProvider.propTypes = {
	children: PropTypes.node,
};
