import {
	createGlobalTheme,
	createGlobalThemeContract,
} from '@vanilla-extract/css';

export const vars = createGlobalThemeContract({
	space: {
		none: 'space-none',
		xxs: 'space-xxs',
		xs: 'space-xs',
		sm: 'space-sm',
		md: 'space-md',
		lg: 'space-lg',
		xl: 'space-xl',
	},
	font: {
		size: {
			md: 'font-size-md',
		},
	},
});

const space = {
	none: '0',
	xxs: '0.266rem',
	xs: '0.43rem',
	sm: '0.695rem',
	md: '1.125rem',
	lg: '1.82rem',
	xl: '2.945rem',
} as const;

createGlobalTheme(':root', vars, {
	space,
	font: {
		size: {
			md: '1.125rem',
		},
	},
});
