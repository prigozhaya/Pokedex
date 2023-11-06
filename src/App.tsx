import './App.css';
import HomePage from './pages/mainPage';
import ErrorBoundary from './components/error/error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InformationPage from './pages/infoPage';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path=":pokemonId" element={<InformationPage />} />
          </Route>
          <Route path="/catalog/:pageId" element={<HomePage />}>
            <Route path=":pokemonId" element={<InformationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
