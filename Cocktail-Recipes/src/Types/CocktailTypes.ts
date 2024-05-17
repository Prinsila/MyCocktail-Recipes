/*export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions?: string;  
   strAlcoholic: string;   
  }
  
  export type CocktailType = 'Alcoholic' | 'Non_Alcoholic';
*/
  

export enum CocktailType {
  Alcoholic = "Alcoholic",
  NonAlcoholic = "Non_Alcoholic"
}

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}
