import './itemlistcontainer.scss';
import Product from '../../components/Product/Product';


function ItemListContainer() {
	const products = [
		{ productId: 0, productTitle: "Muñeca", productImage: 0, productPrice: 150, productStock: 5 },
		{ productId: 1, productTitle: "Pochoclera", productImage: 0, productPrice: 120, productStock: 10  },
		{ productId: 2, productTitle: "Martillo", productImage: 0, productPrice: 100, productStock: 20  },
		{ productId: 3, productTitle: "Ajedrez", productImage: 0, productPrice: 80, productStock: 15  },
		{ productId: 4, productTitle: "Lapicera", productImage: 0, productPrice: 200, productStock: 8  },
		{ productId: 5, productTitle: "Escoba", productImage: 0, productPrice: 250, productStock: 12  }
	]
	return (
		<div className="itemlistcontainer">
			<div className="itellist-title">
				<h3>Ofertas</h3>
			</div>
			<div className="navCategories">
				{products.map(product => 
					<Product key={product.productId}
						id={product.productId}
						title={product.productTitle}
						image={product.productImage}
						price={product.productPrice}
						stock={product.productStock}
					/>
				)}
			</div>
		</div>
	);
}

export default ItemListContainer;