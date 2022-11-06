import React from 'react';
import SoupCard from './SoupCard';
import { Route } from 'react-router-dom';
import './SoupView.css';

export default function SoupView() {
  return (
    <div className="soup">
      <Route
        exact
        path="/hufflepuff"
        render={() => <SoupCard house="egg soup" />}
      />
      <Route
        exact
        path="/ravenclaw"
        render={() => <SoupCard house="veggie soup" />}
      />
      <Route
        exact
        path="/gryffindor"
        render={() => <SoupCard house="stew" />}
      />
      <Route
        exact
        path="/slytherin"
        render={() => <SoupCard house="broth" />}
      />
    </div>
  );
}
