import { useContext } from 'react';
import './WidgetCart.scss';
import { Store } from '../../../../store'
import { HiTrash } from "react-icons/hi";

function WidgetCart({ showWidgetCart }) {
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useContext(Store);

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
		data.items.forEach(item => {
			console.log(data.items);
			const indexProduct = data.items.findIndex(item => {
				return item.item.productId.toString() === btnProductId;
			});
			setData({
				...data,
				cantidad: data.cantidad - data.items[indexProduct].count,
				items: [...data.items]
			});
			console.log(indexProduct);
			data.items.splice(indexProduct, 1);
			console.log(data.items);
		});
	}
	return (
		<div className={`widgetCart ${showWidgetCart ? 'open' : 'close'}`}>
			<h3 className="titleWidgetCart">Carrito de Compras</h3>
			<div className="listItemsidgetCart">
				{
					data.items.map(item =>
						<div className="itemWidgetCart" key={item.item.productId}>
							<h4 className="itemTitleWidgetCart">{item.item.productTitle} <span className="itemSpanTitleWidgetCart">x{item.count}</span></h4>
							<button id={item.item.productId} onClick={handleClickDelete} className="itemButtonWidgetCart"><HiTrash size={24} color='white' /></button>
						</div>
					)
				}
			</div>
			<button className="btnCheckOutWidgetCart">Hacer Checkout</button>
		</div>
	);
}

export default WidgetCart;