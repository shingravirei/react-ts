import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { colors } from '~/styles/vars.css';

createGlobalTheme(':root', colors, {
	text: colors.brown[200],
	background: colors.gray[950],
	primary: colors.blue[500],
	info: colors.purple[600], // blueish/purplish
	success: colors.green[400], // green
	warning: colors.orange[400], // yellow/orange
	danger: colors.red[400], // red

	blue: {
		'50': '#f1f7fc',
		'100': '#e6f0f9',
		'200': '#d1e3f4',
		'300': '#b5cfec',
		'400': '#96b5e3',
		'500': '#7e9cd8',
		'600': '#637ec8',
		'700': '#5268b0',
		'800': '#45588e',
		'900': '#3d4c72',
		'950': '#242b42',
	},

	gray: {
		'50': '#f6f6f9',
		'100': '#ededf1',
		'200': '#d6d6e1',
		'300': '#b2b3c7',
		'400': '#898ca7',
		'500': '#6a6d8d',
		'600': '#555674',
		'700': '#46485e',
		'800': '#3c3d50',
		'900': '#353545',
		'950': '#1f1f28',
	},

	brown: {
		'50': '#f8f7f2',
		'100': '#ece9d9',
		'200': '#dcd7ba',
		'300': '#c2b787',
		'400': '#b4a46b',
		'500': '#a88e58',
		'600': '#93764c',
		'700': '#7b5e42',
		'800': '#664d3a',
		'900': '#554132',
		'950': '#2f2219',
	},

	purple: {
		'50': '#f8f7fb',
		'100': '#f1f0f7',
		'200': '#e6e3f1',
		'300': '#d2cde5',
		'400': '#baafd6',
		'500': '#a08fc3',
		'600': '#957fb8',
		'700': '#7b629f',
		'800': '#675285',
		'900': '#56446e',
		'950': '#372c49',
	},

	green: {
		'50': '#f4f8ed',
		'100': '#e7efd8',
		'200': '#cfe1b5',
		'300': '#b0cc8a',
		'400': '#98bb6c',
		'500': '#749c46',
		'600': '#597b35',
		'700': '#465f2c',
		'800': '#3a4d27',
		'900': '#334225',
		'950': '#192310',
	},

	orange: {
		'50': '#fff8ed',
		'100': '#ffefd4',
		'200': '#ffdca8',
		'300': '#ffc271',
		'400': '#ff9e3b',
		'500': '#fe7f11',
		'600': '#ef6407',
		'700': '#c64908',
		'800': '#9d3b0f',
		'900': '#7e3210',
		'950': '#441606',
	},

	red: {
		'50': '#fff1f1',
		'100': '#ffe1e2',
		'200': '#ffc7c9',
		'300': '#ffa0a3',
		'400': '#ff5d62',
		'500': '#f83b41',
		'600': '#e51d23',
		'700': '#c11419',
		'800': '#a01418',
		'900': '#84181b',
		'950': '#480709',
	},
});

// createGlobalTheme('.light', colors, {
// 	text: '#1F1F28',
// 	background: '#DCD7BA',

// 	primary: '#436FC7',

// 	info: '#957FB8', // blueish/purplish

// 	success: '#98BB6C', // green

// 	warning: '#FF9E3B', // yellow/orange

// 	danger: '#FF5D62', // red
// });

globalStyle('body', {
	backgroundColor: colors.background,
	color: colors.text,
	fontFamily: '"Source Sans 3"',
	lineHeight: '1.5',
	WebkitFontSmoothing: 'antialiased',
});

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
});

globalStyle('*', {
	margin: 0,
});

globalStyle('img, picture, video, canvas, svg', {
	display: 'block',
	maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
	font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
	overflowWrap: 'break-word',
});

globalStyle('p', {
	textWrap: 'balance',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
	textWrap: 'balance',
});

globalStyle('#root, #__next', {
	isolation: 'isolate',
});
