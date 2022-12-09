import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from '~/styles/theme.css';

const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { '@media': 'screen and (min-width: 768px)' },
		desktop: { '@media': 'screen and (min-width: 1024px)' },
	},
	defaultCondition: 'mobile',
	responsiveArray: ['mobile', 'tablet', 'desktop'],
	properties: {
		display: ['none', 'flex', 'grid', 'block', 'inline', 'inline-block'],
		flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
		justifyContent: ['space-between', 'space-around', 'center'],
		gap: vars.space,
		width: vars.space,
		height: vars.space,
		paddingTop: vars.space,
		paddingBottom: vars.space,
		paddingLeft: vars.space,
		paddingRight: vars.space,
		fontSize: vars.font.size,
	},
	shorthands: {
		px: ['paddingLeft', 'paddingRight'],
		py: ['paddingTop', 'paddingBottom'],
	},
});

export const sprinkles = createSprinkles(responsiveProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
