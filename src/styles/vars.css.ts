import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

export const colors = createThemeContract({
	text: null,
	background: null,
	primary: null,
	success: null, // green
	warning: null, // yellow/orange
	danger: null, // red
	info: null, // blueish

	blue: {
		'50': null,
		'100': null,
		'200': null,
		'300': null,
		'400': null,
		'500': null,
		'600': null,
		'700': null,
		'800': null,
		'900': null,
		'950': null,
	},

	gray: {
		'50': null,
		'100': null,
		'200': null,
		'300': null,
		'400': null,
		'500': null,
		'600': null,
		'700': null,
		'800': null,
		'900': null,
		'950': null,
	},

	brown: {
		'50': null,
		'100': null,
		'200': null,
		'300': null,
		'400': null,
		'500': null,
		'600': null,
		'700': null,
		'800': null,
		'900': null,
		'950': null,
	},

	purple: {
		'50': null,
		'100': null,
		'200': null,
		'300': null,
		'400': null,
		'500': null,
		'600': null,
		'700': null,
		'800': null,
		'900': null,
		'950': null,
	},

	green: {
		'50': null,
		'100': null,
		'200': null,
		'300': null,
		'400': null,
		'500': null,
		'600': null,
		'700': null,
		'800': null,
		'900': null,
		'950': null,
	},

	orange: {
		'50': null,
		'100': null,
		'200': null,
		'300': null,
		'400': null,
		'500': null,
		'600': null,
		'700': null,
		'800': null,
		'900': null,
		'950': null,
	},

	red: {
		'50': null,
		'100': null,
		'200': null,
		'300': null,
		'400': null,
		'500': null,
		'600': null,
		'700': null,
		'800': null,
		'900': null,
		'950': null,
	},
});

export const shadow = createGlobalTheme(':root', {
	md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
});
