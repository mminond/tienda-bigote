import './WidgetCart.scss';

function WidgetCart({showWidgetCart}) {
	return (
		<div className={`widgetCart ${showWidgetCart ? 'open' : 'close'}`}>
            <h3 className="titleWidgetCart">Carrito de Compras</h3>
			<div className="listItemsidgetCart">

			</div>
			<button className="btnCheckOutWidgetCart">Hacer Checkout</button>
		</div>
	);
}

export default WidgetCart;