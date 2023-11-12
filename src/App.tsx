import './App.css';
import ErrorBoundary from './components/error/error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spinner from './components/spiner';

const HomePage = lazy(() => import('./pages/mainPage'));
const InformationPage = lazy(() => import('./pages/infoPage'));
const NotFoundPage = lazy(() => import('./pages/notFound'));

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Spinner />}>
                  <HomePage />
                </Suspense>
              }
            >
              <Route
                path="/catalog/:pageId/:pokemonId"
                element={
                  <Suspense fallback={<Spinner />}>
                    <InformationPage />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/catalog/:pageId"
              element={
                <Suspense fallback={<Spinner />}>
                  <HomePage />
                </Suspense>
              }
            >
              <Route
                path=":pokemonId"
                element={
                  <Suspense fallback={<Spinner />}>
                    <InformationPage />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="*"
              element={
                <Suspense fallback={<Spinner />}>
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}
