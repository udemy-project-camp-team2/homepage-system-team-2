declare global {
	interface Window {
		window: {
			location: {
				pathname: any;
			};
		};
	}
}
