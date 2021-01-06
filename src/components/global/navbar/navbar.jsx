import './navbar.scss';
import { useState } from 'react';
import Logo from './logo';
import Cart from './cart/cart';
import WidgetCart from './cart/WidgetCart';

const Navbar = () => {
	const [isVisibleWidgetCart, setisVisibleWidgetCart] = useState(false);

	const openWidgetCart = () => {
		setisVisibleWidgetCart(!isVisibleWidgetCart);
	}
	return (
		<header>
			<Logo />
			<Cart
				actionCart={openWidgetCart}
				showWidgetCart={isVisibleWidgetCart}
			/>
			<WidgetCart
				actionCart={openWidgetCart}
				showWidgetCart={isVisibleWidgetCart}
			/>
		</header>
	)

}
export default Navbar;
