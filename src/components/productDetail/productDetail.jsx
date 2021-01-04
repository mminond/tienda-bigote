import './productDetail.scss';
import { useState } from 'react';
import CountContainer from '../Product/CountContainer';

function ProductDetail({ id, image, title, price, stock }) {
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
		<article className="productDetail">
			<div className="imgProductDetail">
				<img src="#" alt="Foto Producto" />
			</div>
			<div className="descriptionProductDetail">
				<h1>{title}</h1>
				<h2>${price}</h2>
				<h3>Stock Disponible: {stock}</h3>
				<CountContainer stock={stock} count={count} add={add} less={less} />
			</div>
		</article>
	);
}

export default ProductDetail;