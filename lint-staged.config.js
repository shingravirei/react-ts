export default {
	'*.{ts,tsx}': ['npx tsc --noEmit', 'npx eslint', 'npx prettier --write'],
};
