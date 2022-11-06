import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="nav-container">
      <NavLink
        activeStyle={{ backgroundColor: '#FDD017', color: 'black' }}
        className="nav-type top-left bottom-left"
        to="hufflepuff"
      >
        Hufflepuff
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: '#342D7E', color: 'white' }}
        className="nav-type"
        to="ravenclaw"
      >
        Ravenclaw
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: '#800000', color: 'white' }}
        className="nav-type"
        to="gryffindor"
      >
        Gryffindor
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: '#228B22', color: 'white' }}
        className="nav-type"
        to="slytherin"
      >
        Slytherin
      </NavLink>
    </nav>
  );
}
