import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import ravenclaw from '../assets/ravenclaw.jpeg'
import gryffindor from '../assets/gryffindor.jpeg'
import hufflepuff from '../assets/hufflepuff.jpeg'
import slytherin from '../assets/slytherin.jpeg'
import './Home.css'

export default function Container() {
  return (
    <div className='house-container'>
      <Link to='/hufflepuff'>
        <img className='house-imgs' src={hufflepuff} />
      </Link>
      <Link to='/ravenclaw'>
        <img className='house-imgs' src={ravenclaw} />
      </Link>
      <Link to='/gryffindor'>
        <img className='house-imgs' src={gryffindor} />
      </Link>
      <Link to='/slytherin'>
        <img className='house-imgs' src={slytherin} />
      </Link>
    </div>
  )
}
