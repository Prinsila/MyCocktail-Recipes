import React, { useState, FormEvent } from 'react';
import { Cocktail } from '../../Types/CocktailTypes';
import { fetchCocktailsByType, searchCocktailsByName } from '../../Services/DrinkServices';
import CocktailCard from '../CocktailCard/CocktailCard';
import './SearchForm.css';
function SearchForm() {
    const [searchType, setSearchType] = useState<string>('Alcoholic');
    const [searchName, setSearchName] = useState<string>('');
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearchByType = async (event: FormEvent<HTMLFormElement>) => {
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
    };

    const handleSearchByName = async (event: FormEvent<HTMLFormElement>) => {
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
    };

    return (
        <div className='searchform'>
            <h2 className='searchh2'>Search Cocktails</h2>
            <form className='searchf' onSubmit={handleSearchByType}>
                <label className='searchl' htmlFor="searchType">Choose a type:</label>
                <select className='searchs' id="searchType" value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="Alcoholic">Alcoholic</option>
                    <option value="Non_Alcoholic">Non-Alcoholic</option>
                </select>
                <button type="submit">Search by Type</button>
            </form>
            <form onSubmit={handleSearchByName}>
                <label htmlFor="searchName">Search by name:</label>
                <input className='searchi' type="text" id="searchName" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
                <button className='searchb' type="submit">Search by Name</button>
            </form>
            {loading && <p>Loading...</p>}
            {!!cocktails.length && (
            <div className="cocktail-list">
                {cocktails.map((cocktail) => (
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
