import './CountContainer.scss';

export default function CountContainer({ stock, count, add, less }) {
	return (
		<div className="productCount">
			<button disabled={count <= 1} className={`productCountBtn ${count <= 1 ? 'productCountBtn' : 'productCountBtn btnCountActive'}`} onClick={() => less()}>-</button>
			<p className="productQty">{count}</p>
			<button disabled={count >= stock} className={`productCountBtn ${count >= stock ? 'productCountBtn' : 'productCountBtn btnCountActive'}`} onClick={() => add()}>+</button>
		</div>
	);
}


