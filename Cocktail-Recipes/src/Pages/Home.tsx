

import waveImage from '../assets/cocktail-photos/wave.svg'; 
import bannerImage from '../assets/cocktail-photos/honey_cocktail2.png'; 
import './Home.css';

function Home() {
  return (
    <div>
      <div className='Home'>
        <h1>Welcome to Cocktail Connoisseur!</h1>
        <img className='banner' src={bannerImage} alt="Cocktail banner" />
        <p className='p1'> Dive into a vibrant world of flavors and finesse where every sip tells a story.
         Whether you are looking to recreate the classics or experiment with avant-garde mixology, 
         our extensive collection of cocktail recipes is your perfect companion. 
         From refreshing summer spritzers to cozy winter warmers, our meticulously curated recipes
         will guide you through the art of cocktail making. Explore new ingredients, learn about unique spirits, 
         and master the craft of mixology. Start your mixology adventure today and shake things up with Cocktail Connoisseur!!</p>
          <img className='wave' src={waveImage} alt="Cocktail wave illustration" />  
        
        
      </div>
    </div>
  );
};

export default Home;
