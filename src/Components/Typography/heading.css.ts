import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '~/styles/vars.css';

export const headingOne = style({
	fontWeight: 600,
});

export const heading = styleVariants({
	h1: { fontWeight: 600, fontSize: vars.font.size['2xl'] },
	h2: { fontWeight: 600, fontSize: vars.font.size.xl },
});
