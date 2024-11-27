import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { colors } from '~/styles/vars.css';

createGlobalTheme(':root', colors, {
	text: '#DCD7BA',
	background: '#1F1F28',

	primary: '#7E9CD8',

	info: '#957FB8', // blueish/purplish

	success: '#98BB6C', // green

	warning: '#FF9E3B', // yellow/orange

	danger: '#FF5D62', // red
});

createGlobalTheme('.light', colors, {
	text: '#1F1F28',
	background: '#DCD7BA',

	primary: '#436FC7',

	info: '#957FB8', // blueish/purplish

	success: '#98BB6C', // green

	warning: '#FF9E3B', // yellow/orange

	danger: '#FF5D62', // red
});

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
