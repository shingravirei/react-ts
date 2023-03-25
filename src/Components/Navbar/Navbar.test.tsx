import { MemoryRouter } from 'react-router';
import { expect, test } from 'vitest';
import Navbar from '~/Components/Navbar';
import { render, screen } from '~/test/utils';

test('Navbar', () => {
	render(
		<MemoryRouter>
			<Navbar />
		</MemoryRouter>,
	);

	expect(screen.getByRole('link', { name: /home/i })).toBeDefined();
	expect(screen.getByRole('link', { name: /about/i })).toBeDefined();
});
