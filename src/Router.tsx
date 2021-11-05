import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './Components/App';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App />}>
                <Route
                    index
                    element={
                        <Suspense fallback={<h1>loading route...</h1>}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="about"
                    element={
                        <Suspense fallback={<h1>loading route...</h1>}>
                            <About />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
