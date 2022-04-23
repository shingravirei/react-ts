import { createGlobalTheme } from '@vanilla-extract/css';
import { colors, font, space } from './tokens';

export const vars = createGlobalTheme(':root', {
	colors,
	space,
	font,
});
