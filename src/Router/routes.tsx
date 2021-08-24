import { ComponentType, lazy } from 'react';

export interface IRoute {
    path: string;
    exact?: boolean;
    Component: ComponentType;
}

const routes: Array<IRoute> = [
    {
        path: '/',
        exact: true,
        Component: lazy(() => import('../Pages/Home')),
    },
    {
        path: '/about',
        exact: true,
        Component: lazy(() => import('../Pages/About')),
    },
    {
        path: '*',
        Component: lazy(() => import('../Pages/NoMatch')),
    },
];

export default routes;
