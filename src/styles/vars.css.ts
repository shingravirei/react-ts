import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
	size: {
		0: '0.482rem',
		1: '0.579rem',
		2: '0.694rem',
		3: '0.833rem',
		4: '1rem',
		5: '1.2rem',
		6: '1.44rem',
		7: '1.728rem',
		8: '2.074em',
		9: '2.488em',
		10: '2.986em',
		11: '3.583em',
		12: '4.3em',
		13: '5.16em',
		14: '6.192em',
		15: '7.43em',
		16: '8.916em',
		17: '10.699em',
		18: '12.839em',
		19: '15.407em',
		20: '18.488em',
	},
	font: {
		family: { sans: '"Fira Sans", "sans-serif"' },
		size: {
			sm: '0.833rem',
			base: '1rem',
			lg: '1.2rem',
			xl: '1.44rem',
			'2xl': '1.728rem',
			'3xl': '2.074rem',
		},
	},
	colors: {
		bg: '#18181b',
		fg: '#fafafa',
	},
	border: {
		radius: {
			none: '0px',
			sm: '0.134rem',
			rounded: '0.232rem',
			md: '0.28rem',
			lg: '0.482rem',
			full: '9999px',
		},
	},
});
