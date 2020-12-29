import './productDetail.scss';

function ProductDetail({ id, image, title, price, stock }) {
	return (
		<article className="productDetail">
			<h1>{title}</h1>
			<h2>${price}</h2>
			<img src="#" alt="Foto Producto" />
			<h3>Stock Disponible: {stock}</h3>
		</article>
	);
}

export default ProductDetail;