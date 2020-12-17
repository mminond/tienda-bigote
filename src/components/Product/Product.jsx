import { useState } from "react";
import './Product.scss';
import CountContainer from "./CountContainer";

function Product({ id, image, title, price, stock }) {
	const [count, setCount] = useState(1);
	const qty = stock;

	const add = () => {
		if (count < qty) {
			setCount(count + 1);
		}
		if (count === qty) {
			alert("Solo tengo eso en stock");
		}
	};

	const less = () => {
		if (count === 1) {
			alert("No se puede menos de 1");
			return;
		}

		setCount(count - 1);
	};


	return (
		<div className="productCard" id={id}>
			<img className="productImg" src={image} alt={"Foto de " + title} />
			<h3 className="productTitle">{title}</h3>
			<p className="productPrice">${price}</p>
			<CountContainer count={count} add={add} less={less} />
			<button className="productAdd">Agregar</button>
		</div>
	);
}

export default Product;