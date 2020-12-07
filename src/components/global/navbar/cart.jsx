import './cart.scss';
import { HiShoppingCart } from "react-icons/hi";

function Cart() {
	return (
		<div className="cart">
			<HiShoppingCart size={32} color='black' />
		</div>
	);
}

export default Cart;
