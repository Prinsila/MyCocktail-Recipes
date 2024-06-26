import React, { useState, useRef, useEffect, useCallback, useMemo, FormEvent } from 'react';
import { Cocktail, CocktailType } from '../../Types/CocktailTypes';
import { fetchCocktailsByType, searchCocktailsByName } from '../../Services/DrinkServices';
import CocktailCard from '../CocktailCard/CocktailCard';
import './SearchForm.css';
import barmanImage from '../../assets/cocktail-photos/barman.png';

const SearchForm: React.FC = () => {
  const [searchType, setSearchType] = useState<CocktailType>(CocktailType.Alcoholic);
  const [searchName, setSearchName] = useState<string>('');
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const handleSearchByType = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const fetchedCocktails = await fetchCocktailsByType(searchType);
      setCocktails(fetchedCocktails);
    } catch (error) {
      console.error('Failed to fetch cocktails:', error);
    } finally {
      setLoading(false);
    }
  }, [searchType]);

  const handleSearchByName = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const fetchedCocktails = await searchCocktailsByName(searchName);
      setCocktails(fetchedCocktails);
    } catch (error) {
      console.error('Failed to fetch cocktails:', error);
    } finally {
      setLoading(false);
    }
  }, [searchName]);

  // Memoize the filtered cocktails list based on search name
  const filteredCocktails = useMemo(() => {
    return cocktails.filter(cocktail =>
      cocktail.strDrink.toLowerCase().includes(searchName.toLowerCase())
    );
  }, [cocktails, searchName]);

  return (
    <div className='searchform'>
      <h2 className='searchh2'>Search Cocktails</h2>
      
      <form className='searchf' onSubmit={handleSearchByType}>
        <label className='searchl' htmlFor="searchType">Search by type:</label>
        <select
          className='searchs'
          id="searchType"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value as CocktailType)} // Casting the value to CocktailType
        >
          <option value={CocktailType.Alcoholic}>Alcoholic</option>
          <option value={CocktailType.NonAlcoholic}>Non-Alcoholic</option>
        </select>
        <button className='searchb1' type="submit">Search</button>
      </form>
      <form onSubmit={handleSearchByName}>
        <label htmlFor="searchName">Search by name:</label>
        <input
          className='searchi'
          type="text"
          id="searchName"
          ref={nameInputRef}
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button className='searchb' type="submit">Search</button>
      </form>
      <img className="barmanImage" src={barmanImage} alt="barman" />
      <p className='searchp'>
        Unleash your inner mixologist with our powerful search tool at Cocktail Connoisseur! 
        Dive into our expansive library of cocktail recipes, each awaiting to spark your 
        curiosity and taste buds. Whether you're in the mood for a tangy margarita, 
        a smooth whiskey sour, or something uniquely your own, our search functionality
        makes it easy to find just what you are looking for. Filter by ingredients, cocktail type, 
        or even the occasion to find the perfect blend for any moment. Don't just make a drink—make a statement with every glass!
      </p>

      {loading && <p>Loading...</p>}
      {!!filteredCocktails.length && (
        <div className="cocktail-list">
          {filteredCocktails.map((cocktail) => (
            <CocktailCard
              key={cocktail.idDrink}
              id={cocktail.idDrink}
              name={cocktail.strDrink}
              image={cocktail.strDrinkThumb}
              description={cocktail.strInstructions || ''}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchForm;
