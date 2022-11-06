import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import ErrorPage from './ErrorPage';
import { getSoups } from '../apiCalls';
import { NavLink } from 'react-router-dom';
import './SoupCard.css';
import loadingGif from '../assets/loading.gif';

type CardProps = {
  house: string;
};

export type Recipe = {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
};

export const homeButton = (
  <NavLink className="button-container" to="/">
    <span className="text">Return Home</span>
    <button id="work" type="button" name="Hover" className="home-btn wand">
      Return Home
    </button>
  </NavLink>
);

export default function SoupCard(props: CardProps) {
  const [randomSoup, setRandomSoup] = useState<Recipe>({
    title: '',
    ingredients: '',
    servings: '',
    instructions: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSoups(props.house)
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomSoup(data[randomIndex]);
      })
      .catch((error) => setError(error.message));
  }, []);

  const listItems = (recipeSection: string) => {
    let count = 0;
    return recipeSection.split(/[.|]+/).map((item: string) => {
      return <p key={item + '-' + count++}>{item}</p>;
    });
  };

  const recipeCard = randomSoup.title !== '' && (
    <div>
      <h2 className="recipe-title">{randomSoup.title}</h2>
      <p className="recipe-serving">Yields {randomSoup.servings}</p>
      <div className="recipe">
        <div className="recipe-ingredients">
          <h3 className="recipe-header">Ingredients</h3>
          <section className="row">{listItems(randomSoup.ingredients)}</section>
        </div>
        <div className="recipe-instructions">
          <h4 className="recipe-header">Instructions</h4>
          <section>{listItems(randomSoup.instructions)}</section>
        </div>
      </div>
      {homeButton}
    </div>
  );

  return (
    <div className="soup-card">
      <NavBar />
      <article className="recipe-container">
        {error ? <ErrorPage error={error} /> : recipeCard}
        {randomSoup.title === '' && !error ? (
          <img src={loadingGif} className="loading-icon" />
        ) : null}
      </article>
    </div>
  );
}
