import { stringify } from 'querystring';
import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './SoupCard.css';

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
      <NavLink to="/">Return Home</NavLink>
    </article>
  );
}
