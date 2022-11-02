import React from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import ravenclaw from '../assets/ravenclaw.jpeg';
import gryffindor from '../assets/gryffindor.jpeg';
import hufflepuff from '../assets/hufflepuff.jpeg';
import slytherin from '../assets/slytherin.jpeg';
import SoupCard from './SoupCard';

export default function Container() {
  let history = useHistory();

  return (
    <div>
      <button>
        <img src={hufflepuff}></img>
      </button>
      <button>
        <img src={ravenclaw}></img>
      </button>
      <button>
        <img src={gryffindor}></img>
      </button>
      <button>
        <img src={slytherin}></img>
      </button>
      {/*   <Switch>
    //     <Route
    //       exact
    //       path="/hufflepuff"
    //       render={() => <SoupCard house="egg soup" />}
    //     />
    //     <Route
    //       exact
    //       path="/ravenclaw"
    //       render={() => <SoupCard house="veggie soup" />}
    //     />
    //     <Route
    //       exact
    //       path="/gryffindor"
    //       render={() => <SoupCard house="stew" />}
    //     />
    //     <Route
    //       exact
    //       path="/slytherin"
    //       render={() => <SoupCard house="broth" />}
    //     />
    //   </Switch>
      {/* <Link to="/hufflepuff">
        <img src={hufflepuff}></img>
      </Link>
      <Link to="/ravenclaw">
        <img src={ravenclaw}></img>
      </Link>
      <Link to="/gryffindor">
        <img src={gryffindor}></img>
      </Link>
      <Link to="/slytherin">
        <img src={slytherin}></img>
      </Link> */}
    </div>
  );
}
