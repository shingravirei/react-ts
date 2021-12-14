import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from '.';

it('Navbar', () => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
});
