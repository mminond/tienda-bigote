import './productDetail.scss';
import { useState, useContext } from 'react';
//import { useHistory } from 'react-router-dom';
import CountContainer from '../../global/ProductCard/CountContainer';
import {Store} from '../../../store'

function ProductDetail({ item }) {
	const [data, setData] = useContext(Store); 
	const [count, setCount] = useState(1);
	//let history = useHistory();


	const add = () => {
		if (count < item.productStock) {
			setCount(count + 1);
		}
	};

	const less = () => {
		setCount(count - 1);
	};

	const handleClickAdd = (e) => {
		let itemAndQty = {item, count}
		setData({
			...data,
			cantidad: data.cantidad + count,
			items: [...data.items, itemAndQty]
		});
		//alert(`Agregaste ${count} productos al carrito`);
		//history.push('/cart');
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