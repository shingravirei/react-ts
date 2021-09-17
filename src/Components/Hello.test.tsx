import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Hello from './Hello';

it('it works', () => {
    const { debug, getByText } = render(<Hello />);

    expect(getByText('Hello, World!')).toBeInTheDocument();
    debug();
});
