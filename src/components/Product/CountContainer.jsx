import './CountContainer.scss';

export default function CountContainer({ count, add, less }) {
    return (
      <div className="productCount">
        <button className="productCountButton" onClick={() => less()}>-</button>
        <p className="productQty">{count}</p>
        <button className="productCountButton" onClick={() => add()}>+</button>
      </div>
    );
  }
  