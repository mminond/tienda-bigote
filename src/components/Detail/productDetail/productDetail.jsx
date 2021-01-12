import './productDetail.scss';
import { useState } from 'react';
import CountContainer from '../../global/ProductCard/CountContainer';
import { useCartContext } from '../../../store'

function ProductDetail({ item }) {
	const { addItem } = useCartContext();
	const [count, setCount] = useState(1);

	const add = () => {
		if (count < item.productStock) {
			setCount(count + 1);
		}
	};

	const less = () => {
		setCount(count - 1);
	};

	const handleClickAdd = (e) => {
		addItem({ item: item, count: count });
	}
	return (
		<article className="productDetail">
			<div className="imgProductDetail">
				<img src="#" alt="Foto Producto" />
			</div>
			<div className="descriptionProductDetail">
				<h1>{item.productTitle}</h1>
				<h2>${item.productPrice}</h2>
				<h3>Stock Disponible: {item.productStock}</h3>
				<CountContainer stock={item.productStock} count={count} add={add} less={less} />
			</div>
			<button onClick={handleClickAdd}>Agregar al carrito</button>
		</article>
	);
}

export default ProductDetail;