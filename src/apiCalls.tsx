import { Recipe } from './components/SoupCard';

export const getSoups = async (house: string): Promise<Recipe[]> => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'GDaJLJYwIJFvDvWHi24M9A==YA7y1zm22w9L6WhF',
    },
  };
  const response = await fetch(
    `https://api.api-ninjas.com/v1/recipe?query=${house}`,
    options
  );
  const data = await response.json();

  return data.map(
    (soup: {
      ingredients: string;
      instructions: string;
      servings: string;
      title: string;
    }) => ({ ...soup, id: soup.title.split(' ').join('-') })
  );
};
