import { random } from 'cypress/types/lodash';
import { stringify } from 'querystring';
import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './SoupCard.css';
import loadingGif from '../assets/loading.gif';

type CardProps = {
  house: string;
};

type Recipe = {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
};

export default function SoupCard(props: CardProps) {
  const [randomSoup, setRandomSoup] = useState<Recipe>({
    title: '',
    ingredients: '',
    servings: '',
    instructions: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `https://api.api-ninjas.com/v1/recipe?query=${props.house}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'GDaJLJYwIJFvDvWHi24M9A==YA7y1zm22w9L6WhF',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRandomSoup(data[Math.floor(Math.random() * data.length)]);
      })
      .catch((error) => setError(error.message));
  }, []);

    const listItems = (recipeSection: string): ReactNode => {
      let count = 0;
      return recipeSection.split(/[.|]+/).map((item: string) => {
        return <p key={item + '-' + count++}>{item}</p>;
      });
  };

  const recipeCard = randomSoup.title !== '' && (
    <>
      <h2>{randomSoup.title}</h2>
      <h3>Yields {randomSoup.servings}</h3>
      <div className="recipe-ingredients">
        <h4>Ingredients</h4>
        <section className="row">{listItems(randomSoup.ingredients)}</section>
      </div>
      <div className="recipe-instructions">
        <h4>Instructions</h4>
        <section>{listItems(randomSoup.instructions)}</section>
      </div>
      <NavLink to="/">Return Home</NavLink>
    </>
  );

  const errorMessage = (
    <>
      <p>{error}. Try again later.</p>
      <NavLink to="/">Return Home</NavLink>
    </>
  )

  return (
    <article className="recipe-container">
      {error ? errorMessage : recipeCard}
      {randomSoup.title === '' ?  <img src={loadingGif} className="loading-icon" /> : null }
    </article>
  );
}
