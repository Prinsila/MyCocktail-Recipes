import  { useEffect, useState } from 'react';
import './Cocktails.css';
import CocktailCard from '../Components/CocktailCard/CocktailCard';

//import CocktailSearch from '../Components/CocktailSearch/CocktailSearch';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  onClick: () => void; 
}

function Cocktails ()  {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCocktails(data.drinks);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  return (
    <div>
      <h1 className='h1'>Cocktails List</h1>
      
      {error && <p>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cocktail-list">
          {cocktails.map(cocktail => (
            <CocktailCard
              key={cocktail.idDrink}
              id={cocktail.idDrink}
              name={cocktail.strDrink}
              image={cocktail.strDrinkThumb}
              description={""}  
            />
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Cocktails;
