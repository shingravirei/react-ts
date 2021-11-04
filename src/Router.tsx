import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));

const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<h1>loading route...</h1>}>
                        <Home />
                    </Suspense>
                }
            />
            <Route
                path="/about"
                element={
                    <Suspense fallback={<h1>loading route...</h1>}>
                        <About />
                    </Suspense>
                }
            />
        </Routes>
    </BrowserRouter>
);

export default Router;
