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
						<div className="itemWidgetCart" key={item.item.id}>
							<h4 className="itemTitleWidgetCart">{item.item.data.productTitle} <span className="itemSpanTitleWidgetCart">x{item.count}</span></h4>
							<button id={item.item.id} onClick={() => removeItem(item.item.data.productId)} className="itemButtonWidgetCart"><HiTrash size={24} color='white' /></button>
						</div>
					)
				}
			</div>
			<Link to="/cart" className="btnCheckOutWidgetCart">Ver el Detalle</Link>
		</div>
	);
}

export default WidgetCart;