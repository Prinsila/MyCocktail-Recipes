import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CocktailDetail.css';


interface CocktailDetail {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;           
  [key: string]: string | null; 
}

function CocktailDetail() {
  const { id } = useParams<{ id: string }>();
  const [cocktail, setCocktail] = useState<CocktailDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCocktailDetail = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        setCocktail(data.drinks[0]);
      } catch (err) {
        setError(`Failed to fetch cocktail details: ${err instanceof Error ? err.message : String(err)}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCocktailDetail();
  }, [id]); 

  return (
    <div style={{margin: 'auto', minHeight:'90vh'}}>
      {loading ? (
        <p>Loading cocktail details...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : cocktail ? (
        <div className='cocktailDetail'>
          <Link to="/" className="btn">
          back to Home
        </Link>
          <h1 className='DetailH'>{cocktail.strDrink}</h1>
          <img className='CocktailImg' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: 200 }} />
          <p className='CocktailP'>{cocktail.strInstructions}</p>
          <h2 className='CocktailH2'>Ingredients:</h2>
          <ul>
            {Object.keys(cocktail).map((key) => {
              if (key.startsWith('strIngredient') && cocktail[key]) {
                const ingredientNumber = key.slice('strIngredient'.length);
                const measureKey = `strMeasure${ingredientNumber}`;
                return (
                  <li key={key}>
                    {cocktail[key]} - {cocktail[measureKey] || 'to taste'}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      ) : (
        <p>No cocktail details available.</p>
      )}
    </div>
  );
};

export default CocktailDetail;
