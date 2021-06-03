import { render } from '@testing-library/react';
import Hello from './Hello';
import '@testing-library/jest-dom/extend-expect';

it('it works', () => {
    const { debug, getByText } = render(<Hello />);

    expect(getByText('Hello, World!')).toBeInTheDocument();
    debug();
});
