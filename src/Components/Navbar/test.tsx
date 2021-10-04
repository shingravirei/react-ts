import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from '.';

it('Navbar', () => {
    const { getByText } = render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>,
    );

    expect(getByText(/Home/i)).toBeInTheDocument();
    expect(getByText(/About/i)).toBeInTheDocument();
});
