import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			orange: string;
			gray: {
				close: string;
				trash: string;
				darker: string;
				lighter: string;
			};
		};
	}
}
