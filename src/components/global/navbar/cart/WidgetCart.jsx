import { useContext } from 'react';
import './WidgetCart.scss';
import { Store } from '../../../../store'
import { HiTrash } from "react-icons/hi";

function WidgetCart({ showWidgetCart }) {
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useContext(Store);
	return (
		<div className={`widgetCart ${showWidgetCart ? 'open' : 'close'}`}>
			<h3 className="titleWidgetCart">Carrito de Compras</h3>
			<div className="listItemsidgetCart">
				{
					data.items.map(item =>
						<div className="itemWidgetCart" key={item.item.productId}>
							<h4 className="itemTitleWidgetCart">{item.item.productTitle} <span className="itemSpanTitleWidgetCart">x{item.count}</span></h4>
							<button className="itemButtonWidgetCart"><HiTrash size={24} color='white' /></button>
						</div>
					)
				}
			</div>
			<button className="btnCheckOutWidgetCart">Hacer Checkout</button>
		</div>
	);
}

export default WidgetCart;