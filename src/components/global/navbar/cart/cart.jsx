import { useContext } from 'react';
import './cart.scss';
import { HiShoppingCart, HiOutlineChevronRight } from "react-icons/hi";
import { Store } from '../../../../store'

const Cart = ({ actionCart, showWidgetCart }) => {
	const [data, setData] = useContext(Store);
	return (
		<button className={`navCart ${showWidgetCart ? 'openNavCart' : 'closeNavCart'}`} onClick={actionCart}>
			{
				showWidgetCart ?
					<HiOutlineChevronRight size={32} color='black' />
					:
					<>
						<HiShoppingCart size={32} color='black' />
						<span>{data.cantidad}</span>
					</>
			}
		</button>
	)
}

export default Cart;
