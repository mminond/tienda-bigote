import { Link } from 'react-router-dom';
import './dealsProductCard.scss';

function DealsProductCard({ id, title, price }) {
    const backgroundImageRoute = "url(/img/products/imgProductId-" + id + ".jpg)";
    return (
        <Link to={"/detail/" + id} className="dealProductCard" id={id} style={{ backgroundImage: backgroundImageRoute }}>
            <div className="dealDescriptionProductCard">
                <h3 className="dealTitleProductCard">{title}</h3>
                <h4 className="dealPriceProductCard">${price}</h4>
            </div>
        </Link>
    );
}

export default DealsProductCard;