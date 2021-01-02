import { Link } from 'react-router-dom';
import './dealsProductCard.scss';
import fotoEjemplo from '../../assets/products/imgProductId-0.jpg';

function DealsProductCard({ id, image, title, price }) {
    return (
        <Link to={"/detail/" + id} className="dealProductCard" id={id} style={{ backgroundImage: `url(${fotoEjemplo})` }}>
            <div className="dealDescriptionProductCard">
                <h3 className="dealTitleProductCard">{title}</h3>
                <h4 className="dealPriceProductCard">${price}</h4>
            </div>
        </Link>
    );
}

export default DealsProductCard;