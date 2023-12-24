import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, test } from 'vitest';
import { Navbar } from '~/Components/Navbar/Navbar';

describe('Navbar', () => {
	test('Home renders', () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>,
		);

		expect(screen.getByText('Home')).toBeInTheDocument();
	});

	test('About renders', () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>,
		);

		expect(screen.getByText('About')).toBeInTheDocument();
	});
});
