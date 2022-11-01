import React, { useState, useEffect, useCallback } from 'react';
// import {getSoups} from '../apiCalls';

// type Recipes = {
//   title: string;
//   ingredients: string;
//   servings: string;
//   instructions: string;
// }[];

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

  // Option 1: fetch inside useEffect
  // useEffect(() => {
  //   const url =
  //     'https://api.api-ninjas.com/v1/recipe?query=Italian wedding soup';
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'X-Api-Key': 'GDaJLJYwIJFvDvWHi24M9A==YA7y1zm22w9L6WhF',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSoups(data);
  //       setRandomSoup(data[getRandomIndex()]);
  //     }).catch(error => console.log(error.message));
  // }, []);

  // Option 2: function is declared OUTSIDE of useEffect
  // When the function used for fetching is declared outside of the useEffect, we will need to add it to the dependency array to re-render when that has changed. If the function is not wrapped in useCallback, it will update on every re-render, which also triggers useEffect on every re-render
  const fetchData = useCallback(async () => {
    const url =
      'https://api.api-ninjas.com/v1/recipe?query=Italian wedding soup';
    const body = {
      method: 'GET',
      headers: {
        'X-Api-Key': 'GDaJLJYwIJFvDvWHi24M9A==YA7y1zm22w9L6WhF',
      },
    };
    const response = await fetch(url, body);
    const data = await response.json();
    setSoups(data);
    setRandomSoup(data[getRandomIndex()]);
  }, []);

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData()
      // catch any error after because fetchData is still returning a Promise
      .catch(console.error);
  }, [fetchData]);

  const getRandomIndex = (): number => {
    // return Math.floor(Math.random() * (soups.length - 1 + 1) + 0)
    return Math.floor(Math.random() * soups.length);
  };

  console.log(soups);
  console.log(soups.length);
  console.log(getRandomIndex());
  console.log(randomSoup);

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
