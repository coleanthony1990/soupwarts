import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SoupView from './components/SoupView';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Soupwarts</h1>
      <p>Pick your house and receive your soup recipe!</p>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/" render={() => <SoupView />} />
    </div>
  );
};

export default App;
