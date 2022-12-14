import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import SoupView from './components/SoupView';
import './App.css';

const App: React.FC = () => {
  return (
    <main className="main-container">
      <h1 className="header">SOUPWARTS</h1>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/" render={() => <SoupView />} />
    </main>
  );
};

export default App;
