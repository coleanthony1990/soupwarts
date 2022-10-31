import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import SoupCard from './components/SoupCard';
import './App.css';

const App: React.FC = () => {
  // const [recipes, setRecipes] = useState<string[]>([]);

  return (
  <div>
    <h1>Soupwarts</h1>

    <Route path="/" render={() => <Container />}/>
    <SoupCard />
  </div>);
};

export default App;
