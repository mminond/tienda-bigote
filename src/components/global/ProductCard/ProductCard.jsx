import { Link } from 'react-router-dom';
import { useState } from "react";
import './ProductCard.scss';
import CountContainer from "./CountContainer";

function Product({ id, image, title, price, stock }) {
	const [count, setCount] = useState(1);

	const add = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const less = () => {
		setCount(count - 1);
	};

	return (
		<div className="productCard" id={id}>
			<img className="productImg" src={image} alt={"Foto de " + title} />
			<h3 className="productTitle">{title}</h3>
			<p className="productPrice">${price}</p>
			<CountContainer stock={stock} count={count} add={add} less={less} />
			<button className="productAdd">Agregar</button>
			<Link to={"/detail/" + id} className="productAdd">Ver más</Link>
		</div>
	);
}

export default Product;