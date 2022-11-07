import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ravenclaw from '../assets/ravenclaw.jpeg';
import gryffindor from '../assets/gryffindor.jpeg';
import hufflepuff from '../assets/hufflepuff.jpeg';
import slytherin from '../assets/slytherin.jpeg';
import './Home.css';

export default function Container() {
  return (
    <div>
      <p>Pick your house to be sorted a soup</p>
      <div className="house-container">
        <Link to="/hufflepuff">
          <img
            className="house-imgs hufflepuff"
            src={hufflepuff}
            alt="hufflepuff crest"
          />
        </Link>
        <Link to="/ravenclaw">
          <img
            className="house-imgs ravenclaw"
            src={ravenclaw}
            alt="ravenclaw crest"
          />
        </Link>
        <Link to="/gryffindor">
          <img
            className="house-imgs gryffindor"
            src={gryffindor}
            alt="gryffindor crest"
          />
        </Link>
        <Link to="/slytherin">
          <img
            className="house-imgs slytherin"
            src={slytherin}
            alt="slytherin crest"
          />
        </Link>
      </div>
    </div>
  );
}
