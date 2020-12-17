import './navbar.scss';
import Logo from './logo';
import Cart from './cart/cart';
import WidgetCart from './cart/WidgetCart';

const Navbar = ()  => (
	<header>
		<Logo />
		<Cart />
		<WidgetCart />
	</header>
)

export default Navbar;
