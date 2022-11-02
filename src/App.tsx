import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import './App.css';
// import ravenclaw from './assets/ravenclaw.jpeg'

const App: React.FC = () => {
  // const [recipes, setRecipes] = useState<string[]>([]);

  return (
  <div>
    <h1>Soupwarts</h1>

    <Route path="/" render={() => <Container />}/>
    <Link to='/hufflepuff'>
      <img src=''></img>
    </Link>
    <Link to='/ravenclaw'>
      <img src=''></img>
    </Link>
    <Link to='/gryffindor'>
      <div></div>
    </Link>
    <Link to='/slytherin'>
      <div></div>
    </Link>
  </div>);
};

export default App;
