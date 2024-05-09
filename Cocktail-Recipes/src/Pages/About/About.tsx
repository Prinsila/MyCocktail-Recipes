// src/pages/About.tsx

import cocktailImage from '../../assets/cocktail-photos/banner1.png';
import './About.css';

function About ()  {
  return (
    <div className='About'>
      <h1>About Cocktail Connoisseur.....</h1>
      
      <img src={cocktailImage} alt="Cocktail" />

      <p className='p2'>Founded by a passionate team of drink enthusiasts and professional mixologists,
         Cocktail Connoisseur is more than just a recipe site—it's a vibrant community dedicated to the 
         celebration of cocktail culture. Our mission is to empower both novices and seasoned bartenders by providing
        easy-to-follow recipes, detailed guides on spirit histories, and insider tips on crafting the perfect drink. 
        Every recipe on our site is tested and perfected to ensure you can bring professional mixology into your home. 
        At Cocktail Connoisseur, we believe that every cocktail has a story, and we are here to help you create your own memorable moments, one drink at a time.</p>
    </div>
  );
};

export default About;
