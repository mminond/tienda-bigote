import { useState, useEffect } from 'react';
import './productDetail.scss';

function ProductDetail() {
	const [product, setProduct] = useState([]);
	const item = [{ productId: 0, productTitle: "Muñeca", productImage: 0, productPrice: 150, productStock: 5 }];


	const getProduct = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(item);
		}, 2000);
	});

	useEffect(() => {
		getProduct.then(rta => setProduct(rta));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<article className="productDetail">
			{
				product.length ?
					<>
						<h1>{item[0].productTitle}</h1>
						<h2>${item[0].productPrice}</h2>
						<img src="#" alt="Foto Producto" />
						<h3>Stock Disponible: {item[0].productStock}</h3>
					</> :
					<p className="cargando">Cargando</p>
			}

		</article>
	);
}

export default ProductDetail;