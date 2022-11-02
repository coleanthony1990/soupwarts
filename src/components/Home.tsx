import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import ravenclaw from '../assets/ravenclaw.jpeg'
import gryffindor from '../assets/gryffindor.jpeg'
import hufflepuff from '../assets/hufflepuff.jpeg'
import slytherin from '../assets/slytherin.jpeg'

export default function Container() {
  return (
    <div>
      <Link to='/hufflepuff'>
        <img src={hufflepuff} />
      </Link>
      <Link to='/ravenclaw'>
        <img src={ravenclaw} />
      </Link>
      <Link to='/gryffindor'>
        <img src={gryffindor} />
      </Link>
      <Link to='/slytherin'>
        <img src={slytherin} />
      </Link>
    </div>
  )
}
