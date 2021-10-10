import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Navbar = (): JSX.Element => (
    <nav>
        <ul>
            <li>
                <Link to="/">
                    {' '}
                    <FormattedMessage id="home" />
                </Link>
            </li>
            <li>
                <Link to="/about">
                    {' '}
                    <FormattedMessage id="about" />
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
