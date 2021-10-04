import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import routes from './routes';

const renderRoutes = (routes: route[]): JSX.Element => (
    <Switch>
        {routes.map(({ path, exact, Component }, i) => (
            <Route path={path} exact={exact} key={i}>
                <Component />
            </Route>
        ))}
    </Switch>
);

const R = (): JSX.Element => (
    <Router>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
            {renderRoutes(routes)}
        </Suspense>
    </Router>
);

export default R;
