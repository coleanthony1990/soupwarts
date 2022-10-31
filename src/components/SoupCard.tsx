import React, {useState, useEffect} from 'react';
import {getSoups} from '../apiCalls';

export default function SoupCard() {
  const [recipes, setRecipes] = useState<{}[]>([]);

  useEffect(() => {
    (async (): <Promise>() => {}[] => {
      const response = await getSoups('stew');
      const data = (await response).json();
      console.log(data)
      setRecipes(data)
    })

  }, [])
  console.log(getSoups('stew'))
  
  return (
    <div>SoupCard</div>
  )
}
