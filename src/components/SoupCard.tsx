import { stringify } from 'querystring';
import React, { useState, useEffect, ReactNode } from 'react';
import { getSoups } from '../apiCalls';
import { NavLink } from 'react-router-dom';
import './SoupCard.css';

type CardProps = {
  house: string;
};

// this is used inside SoupCard and apiCalls, move to a types file?
export type Recipe = {
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
    getSoups(props.house)
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomSoup(data[randomIndex]);
      })
      .catch((error) => setError(error.message));
  }, []);

  const listIngredients = (): ReactNode => {
    let count = 0;
    return randomSoup.ingredients.split('|').map((item) => {
      return <p key={item + '-' + count++}>{item}</p>;
    });
  };

  const listInstructions = (): ReactNode => {
    let count = 0;
    return randomSoup.instructions.split('. ').map((step) => {
      return <p key={step + '-' + count++}>{step}</p>;
    });
  };

  const recipeCard = randomSoup.title !== '' && (
    <>
      <h2>{randomSoup.title}</h2>
      <h3>Servings: {randomSoup.servings}</h3>
      <div className="recipe-ingredients">
        <h4>Ingredients</h4>
        <section className="row">{listIngredients()}</section>
      </div>
      <div className="recipe-instructions">
        <h4>Instructions</h4>
        <section>{listInstructions()}</section>
      </div>
    </>
  );

  return (
    <article className="recipe-container">
      {error ? <p>{error}. Try again later.</p> : recipeCard}
      <NavLink to="/" className="home-btn">
        Return Home
      </NavLink>
    </article>
  );
}
