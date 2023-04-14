import { PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';

export const getDesignTokens = (mode: string) => ({
	palette: {
		mode: mode as PaletteMode,
		...((mode as PaletteMode) === 'light'
			? {
					// palette values for light mode
					primary: {
						main: 'rgb(255, 255, 255)',
					},
					secondary: {
						main: 'rgb(234 234 240)',
					},
					divider: 'rgb(189, 189, 189)',
					text: {
						primary: grey[900],
						secondary: 'rgb(97, 97, 97)',
						disabled: '#0369a1',
					},
					error: {
						main: 'rgb(55, 65, 81)',
						light: 'rgb(14, 165, 233)',
						dark: '#f5f5f5',
					},
					warning: {
						main: '#0369a1',
						light: '#212121',
						dark: 'rgb(245, 245, 245)',
					},
					info: {
						main: '#eaeaf0',
					},
					success: {
						main: 'rgb(117 117 117)',
					},
			  }
			: {
					// palette values for dark mode
					primary: {
						main: 'rgb(55, 65, 81)',
					},
					secondary: {
						main: 'rgb(97, 97, 97)',
					},
					divider: '#ffffff1f',
					text: {
						primary: '#fff',
						second: 'rgb(204, 204, 204)',
						disabled: '#fff',
					},
					error: {
						main: 'rgb(255, 255, 255)',
						light: 'rgb(56, 189, 248)',
						dark: 'rgb(245, 245, 245)',
					},
					warning: {
						main: 'rgb(56, 189, 248)',
						light: '#fff',
						dark: 'rgb(33, 33, 33)',
					},
					info: {
						main: 'rgb(224, 242, 254)',
					},
					success: {
						main: 'rgb(158, 158, 158)',
					},
			  }),
	},
	typography: {
		fontFamily: [
			'DM Sans',
			'BlinkMacSystemFont',
			'Segoe UI',
			'Roboto',
			'Helvetica Neue',
			'Arial',
			'sans-serif',
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
		].join(','),
	},
	components: {
		...(mode === 'light'
			? {
					MuiPaper: {
						styleOverrides: {
							root: {
								backgroundColor: 'white',
							},
						},
					},
					MuiFormLabel: {
						styleOverrides: {
							root: {
								color: 'rgb(97, 97, 97) !important',
							},
						},
					},
			  }
			: {
					MuiPaper: {
						styleOverrides: {
							root: {
								backgroundColor: '#374151',
							},
						},
					},
					MuiFormLabel: {
						styleOverrides: {
							root: {
								color: 'rgb(204, 204, 204) !important',
							},
						},
					},
			  }),
	},
});
