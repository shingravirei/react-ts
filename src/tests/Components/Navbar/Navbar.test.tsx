import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Navbar } from '~/Components/Navbar/Navbar';
import { render } from '~/tests/utils';

describe('Navbar', () => {
	test('Home renders', () => {
		render(<Navbar />);

		expect(screen.getByText('Home')).toBeInTheDocument();
	});

	test('About renders', () => {
		render(<Navbar />);

		expect(screen.getByText('About')).toBeInTheDocument();
	});
});
