import React, { useState, useEffect, useCallback } from 'react';

type Recipe = {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
};

export default function HuffCard() {
  const [soups, setSoups] = useState<Recipe[]>([]);
  const [randomSoup, setRandomSoup] = useState<Recipe>({
    title: '',
    ingredients: '',
    servings: '',
    instructions: '',
  });

  useEffect(() => {
    const url =
      'https://api.api-ninjas.com/v1/recipe?query=Italian wedding soup';
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'GDaJLJYwIJFvDvWHi24M9A==YA7y1zm22w9L6WhF',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSoups(data);
        setRandomSoup(data[getRandomIndex()]);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const getRandomIndex = (): number => {
    return Math.floor(Math.random() * soups.length);
  };

  return (
    <div className="recipe-container">
      <h2>{randomSoup.title}</h2>
      <p>{randomSoup.ingredients}</p>
      <p>{randomSoup.servings}</p>
      <h3>Instructions: </h3>
      <p>{randomSoup.instructions}</p>
    </div>
  );
}
