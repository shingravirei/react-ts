import { createThemeContract } from '@vanilla-extract/css';

export const colors = createThemeContract({
	text: null,
	background: null,
	primary: null,
	success: null, // green
	warning: null, // yellow/orange
	danger: null, // red
	info: null, // blueish
});
