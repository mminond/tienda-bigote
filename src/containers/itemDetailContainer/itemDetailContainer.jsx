import { useState, useEffect } from 'react';
import './itemDetailContainer.scss';
import ProductDetail from '../../components/productDetail/productDetail';

function ItemDetailContainer() {
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
		<section className="itemDetailContainer">
			{
				product.length ?
					<ProductDetail key={item[0].productId}
						id={item[0].productId}
						title={item[0].productTitle}
						image={item[0].productImage}
						price={item[0].productPrice}
						stock={item[0].productStock}
					/> :
					<p className="cargando">Cargando</p>
			}
		</section>
	);
}

export default ItemDetailContainer;