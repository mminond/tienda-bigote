import { useState, useEffect } from 'react';
import ProductDetail from '../../components/Detail/productDetail/productDetail';
import AllItems from '../../assets/json/products.json';

function ItemDetailContainer({ id }) {
	const [product, setProduct] = useState([]);
	const filteredProduct = AllItems.filter(p => p.productId.toString() === id);

	const getProduct = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(filteredProduct);
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
					<ProductDetail
						item={filteredProduct[0]}
					/> :
					<p className="cargando">Cargando</p>
			}
		</section>
	);
}

export default ItemDetailContainer;