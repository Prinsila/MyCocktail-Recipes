// src/components/CocktailList.tsx
import { useEffect, useState } from 'react';
import { fetchCocktails } from '../Services/DrinkServices';
import './CocktailList.css';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

function CocktailList () {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const fetchedCocktails = await fetchCocktails();
        setCocktails(fetchedCocktails);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch cocktails:', error);
        setLoading(false);
      }
    };

    getCocktails();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading cocktails...</p>
      ) : (
        <ul>
          {cocktails.map((cocktail) => (
            <li key={cocktail.idDrink}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '100px' }} />
              <p>{cocktail.strDrink}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CocktailList;
