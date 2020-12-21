import './CountContainer.scss';

export default function CountContainer({ stock, count, add, less }) {
	return (
		<div className="productCount">
			<button disabled={count <= 1} className="productCountBtn" onClick={() => less()}>-</button>
			<p className="productQty">{count}</p>
			<button disabled={count >= stock} className="productCountBtn" onClick={() => add()}>+</button>
		</div>
	);
}


