import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SoupView from './components/SoupView';
import './App.css';
import quotes from './assets/quotes.json'

const App: React.FC = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <main className="main-container">
      <h1 className="header">SOUPWARTS</h1>
      <Route exact path="/" render={() => <Home quote={randomQuote}/>} />
      <Route path="/" render={() => <SoupView />} />
    </main>
  );
};

export default App;
