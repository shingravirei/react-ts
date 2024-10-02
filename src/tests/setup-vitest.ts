import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from '~/tests/mocks/node';

afterEach(() => {
	// As we're not using globals this is necessary to clean the render tree
	// that way we don't get duplicated dom elements or memory leaks
	cleanup();
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
