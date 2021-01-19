import { Link } from 'react-router-dom';
import './ProductCard.scss';

function Product({ item, image }) {
	return (
		<div className="productCard" id={item.id}>
			<img className="productImg" src={image} alt={"Foto de " + item.data.productTitle} />
			<h3 className="productTitle">{item.data.productTitle}</h3>
			<p className="productPrice">${item.data.productPrice}</p>
			<Link to={"/detail/" + item.id} className="productAdd">Ver más</Link>
		</div>
	);
}

export default Product;