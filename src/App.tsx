import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import './App.css';
import ravenclaw from './assets/ravenclaw.jpeg'
import gryffindor from './assets/gryffindor.jpeg'
import hufflepuff from './assets/hufflepuff.jpeg'
import slytherin from './assets/slytherin.jpeg'

const App: React.FC = () => {

  return (
    <div>
      <h1>Soupwarts</h1>

<<<<<<< HEAD
      <Route path="/" render={() => <Container />} />
    </div>
  );
=======
    <Route path="/" render={() => <Container />}/>
    <Link to='/hufflepuff'>
      <img src={hufflepuff}></img>
    </Link>
    <Link to='/ravenclaw'>
      <img src={ravenclaw}></img>
    </Link>
    <Link to='/gryffindor'>
      <img src={gryffindor}></img>
    </Link>
    <Link to='/slytherin'>
      <img src={slytherin}></img>
    </Link>
  </div>);
>>>>>>> 4c426864126a064aa1d49e5fd84394818a85cafb
};

export default App;
