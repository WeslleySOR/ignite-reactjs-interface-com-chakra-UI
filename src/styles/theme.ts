import { extendTheme, Theme } from '@chakra-ui/react';

type MyTheme = {
	colors: {
		yellow: {
			transparent: string;
		};
		gray: {
			'400.50%': string;
		};
	};
	styles: {
		global: {
			body: {
				color: string;
			};
		};
	};
} & Theme;

export const theme = extendTheme({
	fonts: {
		body: 'Poppins',
		heading: 'Poppins',
	},
	colors: {
		yellow: {
			500: '#FFBA08',
			transparent: '#FFBA0850',
		},
		gray: {
			100: '#F5F8FA',
			200: '#DADADA',
			400: '#999999',
			'400.50%': '#99999950',
			700: '#47585B',
		},
	},
	styles: {
		global: {
			body: {
				color: 'gray.700',
			},
		},
	},
} as MyTheme);
