import './cart.scss';
import { HiShoppingCart, HiOutlineChevronRight } from "react-icons/hi";


const Cart = ({ actionCart, showWidgetCart, cartQty }) => (
	<button className={`navCart ${showWidgetCart ? 'openNavCart' : 'closeNavCart'}`} onClick={actionCart}>
		{
			showWidgetCart ?
			<HiOutlineChevronRight size={32} color='black' />
			:
			<>
			<HiShoppingCart size={32} color='black' />
			<span>{cartQty}</span>
			</>
		}
	</button>
)

export default Cart;
