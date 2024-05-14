import { Cocktail, CocktailType } from '../Types/CocktailTypes';


function isCocktailArray(obj: any): obj is Cocktail[] {
    return Array.isArray(obj) && obj.every(item =>
        item && typeof item === 'object' && 'idDrink' in item && 'strDrink' in item && 'strDrinkThumb' in item
    );
}

export const fetchCocktails = async (): Promise<Cocktail[]> => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    if (!response.ok) {
        throw new Error(`Failed to fetch cocktails: ${response.status}`);
    }
    const data = await response.json();
    
    if (!data.drinks || !isCocktailArray(data.drinks)) {
        throw new Error("Unexpected data structure received from API");
    }
    return data.drinks;
};

export const fetchCocktailsByType = async (type: CocktailType): Promise<Cocktail[]> => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch cocktails by type (${type}): ${response.status}`);
    }
    const data = await response.json();
    
    if (!data.drinks || !isCocktailArray(data.drinks)) {
        throw new Error("Unexpected data structure received from API");
    }
    return data.drinks;
};

export const searchCocktailsByName = async (name: string): Promise<Cocktail[]> => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to search cocktails by name (${name}): ${response.status}`);
    }
    const data = await response.json();
    
    if (!data.drinks || !isCocktailArray(data.drinks)) {
        throw new Error("Unexpected data structure received from API");
    }
    return data.drinks;
};

