<<<<<<< Updated upstream
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SoupView from './components/SoupView';
import './App.css';
=======
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Container from './components/Container';

import './App.css';
import LinkContainer from './components/LinkContainer';
>>>>>>> Stashed changes


const App: React.FC = () => {

  return (
  <main className='main-container'>
    <h1>SOUPWARTS</h1>
    <p>Pick your house and receive your soup recipe!</p>
    <Route exact path="/" render={() => <Home />} />
    <Route path="/" render={() => <SoupView />} />
  </main>);
};

export default App;
