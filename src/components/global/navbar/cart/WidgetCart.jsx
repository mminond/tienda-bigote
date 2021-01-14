import { Link } from 'react-router-dom';
import { useCartContext } from '../../../../store'
import { HiTrash } from "react-icons/hi";
import './WidgetCart.scss';

function WidgetCart({ showWidgetCart }) {
	const { cart, removeItem } = useCartContext();

	return (
		<div className={`widgetCart ${showWidgetCart ? 'open' : 'close'}`}>
			<h3 className="titleWidgetCart">Carrito de Compras</h3>
			<div className="listItemsidgetCart">
				{
					cart.items.map(item =>
						<div className="itemWidgetCart" key={item.item.productId}>
							<h4 className="itemTitleWidgetCart">{item.item.productTitle} <span className="itemSpanTitleWidgetCart">x{item.count}</span></h4>
							<button id={item.item.productId} onClick={() => removeItem(item.item.productId)} className="itemButtonWidgetCart"><HiTrash size={24} color='white' /></button>
						</div>
					)
				}
			</div>
			<Link to="/cart" className="btnCheckOutWidgetCart">Hacer Checkout</Link>
		</div>
	);
}

export default WidgetCart;