import { Link } from 'react-router-dom';
import { useCartContext } from '../../store';
import { HiTrash } from "react-icons/hi";
import './cart.scss';

function Cart() {
  const { cart, removeItem } = useCartContext();
  return (
    <section className="sectionCart">
      <h3 className="titleCart">Carrito de Compras</h3>
      <div className="containerCart">
        <table className="cartTable">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.items.map(item =>
                <tr key={item.item.id}>
                  <td>{item.item.data.productTitle}</td>
                  <td>{item.count}</td>
                  <td>${item.item.data.productPrice}</td>
                  <td>${item.item.data.productPrice * item.count}</td>
                  <td><button id={item.item.id} onClick={() => removeItem(item.item.data.productId)} className="btnItemDelete"><HiTrash size={20} color='white' /></button></td>
                </tr>
              )
            }
          </tbody>
        </table>
        <aside className="cartLastStep">
          <h2 className="finalPrice">${cart.precioFinal}</h2>
          <p>Precio Final</p>
          <Link to="/checkout" className="btnCheckout">Hacer Checkout</Link>
        </aside>
      </div>
    </section>
  );
}

export default Cart;