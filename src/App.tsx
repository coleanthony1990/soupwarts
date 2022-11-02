import React from 'react';
import Container from './components/Container';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Soupwarts</h1>
      <Container />
      {/* <Route path="/" render={() => <Container />} /> */}
    </div>
  );
};

export default App;
