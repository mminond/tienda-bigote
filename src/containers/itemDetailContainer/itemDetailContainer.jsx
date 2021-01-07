import { useState, useEffect } from 'react';
import ProductDetail from '../../components/Detail/productDetail/productDetail';
import AllItems from '../../assets/json/products.json';

function ItemDetailContainer({ id }) {
	const [product, setProduct] = useState([]);
	var itemDetail = [];

	AllItems.forEach(item => {
		if (item.productId.toString() === id) {
			itemDetail.push(item);
		}
	});

	const getProduct = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(itemDetail);
		}, 2000);
	});

	useEffect(() => {
		getProduct
			.then(rta => setProduct(rta))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="itemDetailContainer">
			{
				product.length ?
					<ProductDetail key={itemDetail[0].productId}
						id={itemDetail[0].productId}
						title={itemDetail[0].productTitle}
						image={itemDetail[0].productImage}
						price={itemDetail[0].productPrice}
						stock={itemDetail[0].productStock}
					/> :
					<p className="cargando">Cargando</p>
			}
		</section>
	);
}

export default ItemDetailContainer;