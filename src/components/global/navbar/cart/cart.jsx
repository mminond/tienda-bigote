import './cart.scss';
import { HiShoppingCart, HiOutlineChevronRight } from "react-icons/hi";
import { useCartContext } from '../../../../store'

const Cart = ({ actionCart, showWidgetCart }) => {
	const { cart } = useCartContext();
	return (
		<button className={`navCart ${showWidgetCart ? 'openNavCart' : 'closeNavCart'}`} onClick={actionCart/*cart.cantidad > 0 ? actionCart : undefined*/}>
			{
				showWidgetCart ?
					<HiOutlineChevronRight size={32} color='black' />
					:
					<>
						<HiShoppingCart size={32} color='black' />
						<span>{cart.cantidad}</span>
					</>
			}
		</button>
	)
}

export default Cart;
