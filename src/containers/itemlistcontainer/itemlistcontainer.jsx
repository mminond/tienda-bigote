import { useState, useEffect } from 'react';
import './itemlistcontainer.scss';
import Product from '../../components/global/ProductCard/ProductCard';
import AllItems from '../../assets/json/products.json';


function ItemListContainer({categoryTitle, categoryId}) {
	const [items, setItems] = useState([]);
	const filteredProducts = AllItems.filter(p => p.categoryId === categoryId);

	const getProducts = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(filteredProducts);
		}, 2000);
	});

	useEffect(() => {
		getProducts.then(rta => setItems(rta));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="itemlistcontainer">
			<div className="itemlist-title">
				<h3>{categoryTitle}</h3>
			</div>
			{
				items.length ?
					<div className="itemListProducts">
						{filteredProducts.map(product =>
							<Product key={product.productId}
								item={product}
							/>
						)}
					</div> :
					<p className="cargando">Cargando</p>
			}

		</div>
	);
}

export default ItemListContainer;