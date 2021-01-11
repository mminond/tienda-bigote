import { Link } from 'react-router-dom';
import { useState } from "react";
import './ProductCard.scss';
import CountContainer from "./CountContainer";

function Product({ item }) {
	const [count, setCount] = useState(1);
	const backgroundImageRoute = "url(/img/products/imgProductId-" + item.productId + ".jpg)";
	console.log(item);

	const add = () => {
		if (count < item.productStock) {
			setCount(count + 1);
		}
	};

	const less = () => {
		setCount(count - 1);
	};

	return (
		<div className="productCard" id={item.productId}>
			<img className="productImg" src={backgroundImageRoute} alt={"Foto de " + item.productTitle} />
			<h3 className="productTitle">{item.productTitle}</h3>
			<p className="productPrice">${item.productPrice}</p>
			<CountContainer stock={item.productStock} count={count} add={add} less={less} />
			<button className="productAdd">Agregar</button>
			<Link to={"/detail/" + item.productId} className="productAdd">Ver más</Link>
		</div>
	);
}

export default Product;