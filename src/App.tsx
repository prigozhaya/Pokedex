import React from 'react';
import './App.css';
import HomePage from './pages';
import ErrorBoundary from './components/error/error';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    );
  }
}

export default App;
