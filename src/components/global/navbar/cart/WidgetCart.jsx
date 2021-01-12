import { Link } from 'react-router-dom';
import { useCartContext } from '../../../../store'
import { HiTrash } from "react-icons/hi";
import './WidgetCart.scss';

function WidgetCart({ showWidgetCart }) {
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
		<div className={`widgetCart ${showWidgetCart ? 'open' : 'close'}`}>
			<h3 className="titleWidgetCart">Carrito de Compras</h3>
			<div className="listItemsidgetCart">
				{
					cart.items.map(item =>
						<div className="itemWidgetCart" key={item.item.productId}>
							<h4 className="itemTitleWidgetCart">{item.item.productTitle} <span className="itemSpanTitleWidgetCart">x{item.count}</span></h4>
							<button id={item.item.productId} onClick={handleClickDelete} className="itemButtonWidgetCart"><HiTrash size={24} color='white' /></button>
						</div>
					)
				}
			</div>
			<Link to="/cart" className="btnCheckOutWidgetCart">Hacer Checkout</Link>
		</div>
	);
}

export default WidgetCart;