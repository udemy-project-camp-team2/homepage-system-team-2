import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';

interface StyledProviderProps {
	children: React.ReactNode;
}

const StyledProvider = ({ children }: StyledProviderProps) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export default StyledProvider;
