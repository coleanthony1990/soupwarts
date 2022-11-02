// interface Response {
//   method: string;
//   withCredentials: boolean;
//   headers: object;
// }

import { useCallback } from "react";

export const fetchData = useCallback(async () => {
  const url =
    'https://api.api-ninjas.com/v1/recipe?query=Italian wedding soup';
  const body = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'GDaJLJYwIJFvDvWHi24M9A==YA7y1zm22w9L6WhF',
    },
  };
  return await fetch(url, body);
  // const data = await response.json();
  // setSoups(data);
  // setRandomSoup(data[getRandomIndex()]);
}, []);


export