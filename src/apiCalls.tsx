import { Recipe } from './components/SoupCard';

export const getSoups = async (house: string): Promise<Recipe[]> => {
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'GDaJLJYwIJFvDvWHi24M9A==YA7y1zm22w9L6WhF',
    },
  };
  const response = await fetch(
    `https://api.api-ninjas.com/v1/recipe/?query=${house}`,
    options
  );
  return await response.json();
};
