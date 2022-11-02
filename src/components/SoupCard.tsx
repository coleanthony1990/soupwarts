import React, { useState, useEffect } from 'react';
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
  const [soups, setSoups] = useState<Recipe[]>([]);
  const [randomSoup, setRandomSoup] = useState<Recipe>({
    title: '',
    ingredients: '',
    servings: '',
    instructions: '',
  });

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
        setSoups(data);
        setRandomSoup(data[Math.floor(Math.random() * (data.length + 1))]);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="recipe-container">
      <h2>{randomSoup.title}</h2>
      <p>{randomSoup.ingredients}</p>
      <p>{randomSoup.servings}</p>
      <h3>Instructions: </h3>
      <p>{randomSoup.instructions}</p>
      <NavLink to="/">Return Home</NavLink>
    </div>
  );
}
