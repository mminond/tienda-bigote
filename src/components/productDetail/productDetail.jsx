import './productDetail.scss';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CountContainer from '../Product/CountContainer';

function ProductDetail({ id, image, title, price, stock }) {
	const [count, setCount] = useState(1);
	let history = useHistory();


	const add = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const less = () => {
		setCount(count - 1);
	};

	const handleClickAdd = (e) => {
		alert("Producto agregado al carrito");
		history.push('/cart')
	}
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
			<button onClick={handleClickAdd}>Agregar al carrito</button>
		</article>
	);
}

export default ProductDetail;