import { useState, useEffect } from 'react';
import './itemlistcontainer.scss';
import Product from '../../components/Product/Product';
import AllItems from '../../assets/json/products.json';


function ItemListContainer() {
	const [items, setItems] = useState([]);
	var products = [];
	AllItems.forEach(item => {
		console.log(item.productTitle);
		console.log(item.isDeal);
		if (item.isDeal) {
			products.push(item);
		}
	});

	const getProducts = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});

	useEffect(() => {
		getProducts.then(rta => setItems(rta));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="itemlistcontainer">
			<div className="itemlist-title">
				<h3>Ofertas</h3>
			</div>
			{
				items.length ?
					<div className="itemListProducts">
						{products.map(product =>
							<Product key={product.productId}
								id={product.productId}
								title={product.productTitle}
								image={product.productImage}
								price={product.productPrice}
								stock={product.productStock}
							/>
						)}
					</div> :
					<p className="cargando">Cargando</p>
			}

		</div>
	);
}

export default ItemListContainer;