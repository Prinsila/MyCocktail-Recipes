import { Link } from 'react-router-dom';
import './CocktailCard.css';

interface CocktailCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

function CocktailCard({ id, name, image, description }: CocktailCardProps) {
  return (
    <div className="cocktail-card">
      <img src={image} alt={name} className="cocktail-image" />
      <div className="cocktail-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/cocktails/${id}`} className="details-link">View Details</Link>
      </div>
    </div>
  );
}

export default CocktailCard;
