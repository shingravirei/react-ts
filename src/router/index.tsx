import { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
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
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                <Suspense fallback={<h1>Loading...</h1>}>
                    {renderRoutes(routes)}
                </Suspense>
            </div>
        </Router>
    );
};

export default R;
