import { globalStyle } from '@vanilla-extract/css';
import { vars } from '~/styles/vars.css';

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
});

globalStyle('*', {
	margin: 0,
});

globalStyle('html, body', {
	height: '100%',
});

globalStyle('body', {
	lineHeight: 1.728,
	WebkitFontSmoothing: 'antialiased',
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

globalStyle('#root, #__next', {
	isolation: 'isolate',
});

globalStyle('html', {
	fontFamily: vars.font.family.sans,
	HeadingOne: 400,
	backgroundColor: vars.colors.bg,
	color: vars.colors.fg,
});
