import { ComponentType, lazy } from 'react';

const routes: route[] = [
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

declare global {
    interface route {
        path: string;
        exact?: boolean;
        Component: ComponentType;
    }
}
