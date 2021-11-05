import { Outlet } from 'react-router';
import Navbar from '../Navbar';

const App = (): JSX.Element => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
