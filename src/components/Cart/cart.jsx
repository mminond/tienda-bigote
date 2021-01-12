import { useCartContext } from '../../store';
import { HiTrash } from "react-icons/hi";
import './cart.scss';

function Home() {
	const { cart, removeItem } = useCartContext();

	const handleClickDelete = (e) => {
		let btnProductId;
		switch (e.target.localName) {
			case "path":
				btnProductId = e.nativeEvent.path[2].id;
				break;
			case "svg":
				btnProductId = e.nativeEvent.path[1].id;
				break;
			case "button":
				btnProductId = e.target.id;
				break;
			default:
				break;
		}
		removeItem(btnProductId);
	}

	return (
		<section className="sectionCart">
			<h3 className="titleCart">Carrito de Compras</h3>
			<div className="containerCart">
				<table className="cartTable">
					<thead>
						<tr>
							<th>Producto</th>
							<th>Cantidad</th>
							<th>Precio Unitario</th>
							<th>Subtotal</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{
							cart.items.map(item =>
								<tr key={item.item.productId}>
									<td>{item.item.productTitle}</td>
									<td>{item.count}</td>
									<td>${item.item.productPrice}</td>
									<td>${item.item.productPrice * item.count}</td>
									<td><button id={item.item.productId} onClick={handleClickDelete} className="btnItemDelete"><HiTrash size={20} color='white' /></button></td>
								</tr>
							)
						}
					</tbody>
				</table>
				<aside className="cartLastStep">
					<h2 className="finalPrice">${cart.precioFinal}</h2>
					<p>Precio Final</p>
					<button className="btnCheckout">Checkout</button>
				</aside>
			</div>
		</section>
	);
}

export default Home;