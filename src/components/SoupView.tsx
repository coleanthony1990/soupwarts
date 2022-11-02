import React from 'react';
import SoupCard from './SoupCard';
import { Route } from 'react-router-dom'

const SoupView = () => {
  return (
    <div>
        <Route exact path='/hufflepuff' render={() => <SoupCard house='egg soup'/>}/>
        <Route exact path='/ravenclaw' render={() => <SoupCard house='veggie soup'/>}/>
        <Route exact path='/gryffindor' render={() => <SoupCard house='stew'/>}/>
        <Route exact path='/slytherin' render={() => <SoupCard house='broth'/>}/>
    </div>
  )
}

export default SoupView
