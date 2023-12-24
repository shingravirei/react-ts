import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
	// As we're not using globals this is necessary the clean the render tree
	// that way we don't get duplicated dom elements
	cleanup();
});
