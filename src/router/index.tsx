import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import routes, { IRoute } from './routes';

const renderRoutes = (routes: Array<IRoute>): JSX.Element => (
    <Switch>
        {routes.map(({ path, exact, Component }, i) => (
            <Route path={path} exact={exact} key={i}>
                <Component />
            </Route>
        ))}
    </Switch>
);

const R = (): JSX.Element => {
    return (
        <Router>
            <Navbar />
            <Suspense fallback={<h1>Loading...</h1>}>
                {renderRoutes(routes)}
            </Suspense>
        </Router>
    );
};

export default R;
