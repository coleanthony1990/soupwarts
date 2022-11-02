<<<<<<< HEAD
import React from 'react';
import { Route } from 'react-router-dom';

export default function Container() {
  return <div>Container</div>;
=======
import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import SoupCard from './SoupCard'

export default function Container() {
  return (
    <div>
      
     <Route exact path='/hufflepuff' render={() => <SoupCard house='egg soup'/>}/>
     <Route exact path='/ravenclaw' render={() => <SoupCard house='veggie soup'/>}/>
     <Route exact path='/gryffindor' render={() => <SoupCard house='stew'/>}/>
     <Route exact path='/slytherin' render={() => <SoupCard house='broth'/>}/>
    </div>
  )
>>>>>>> 4c426864126a064aa1d49e5fd84394818a85cafb
}
