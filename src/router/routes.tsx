import { ComponentType, lazy } from 'react';

export interface IRoute {
    path: string;
    exact: boolean;
    Component: ComponentType;
}

const routes: Array<IRoute> = [
    {
        path: '/',
        exact: true,
        Component: lazy(() => import('../Components/Home')),
    },
    {
        path: '/about',
        exact: true,
        Component: lazy(() => import('../Components/About')),
    },
    {
        path: '/users',
        exact: true,
        Component: lazy(() => import('../Components/Users')),
    },
];

export default routes;
