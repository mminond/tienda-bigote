import { useState, useEffect } from 'react';
import './itemlistcontainer.scss';
import Product from '../../components/global/ProductCard/ProductCard';
import { getFirestore } from '../../db'

function ItemListContainer({ categoryTitle, categoryId }) {
	const [items, setItems] = useState([]);
	const db = getFirestore();

	const getProductsFromDB = (catId) => {
		db.collection('productos')
			.where('categoryId', '==', catId)
			.get()
			.then(docs => {
				let arr = [];
				docs.forEach(doc => {
					arr.push({ id: doc.id, data: doc.data() });
				})
				setItems(arr);
			})
			.catch(e => console.log(e))
	}

	useEffect(() => {
		getProductsFromDB(categoryId);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId]);

	return (
		<div className="itemlistcontainer">
			<div className="itemlist-title">
				<h3>{categoryTitle}</h3>
			</div>
			{
				items.length ?
					<div className="itemListProducts">
						{items.map(product =>
							<Product key={product.id}
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