import { useState } from 'react';
import { useCartContext } from '../../store';
import './checkout.scss';
import { getFirestore } from '../../db';
import firebase from 'firebase/app';

function Checkout() {
    const db = getFirestore();
    const { cart, clearCart } = useCartContext();
    const [dobleMail, setDobleMail] = useState(true);
    const [todoCompleto, setTodoCompleto] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
    });
    const [venta, completarVenta] = useState(false);
    const [idVenta, setIdVenta] = useState('');
    const handleChangeInput = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    }

    const compra = {
        user: formData,
        items: cart.items,
        totalPrice: cart.precioFinal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const updateStock = () => {
        cart.items.forEach(element => {
            //Traigo el stock viejo
            db.collection('productos')
                .doc(element.item.id)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        //Actualizo el stock
                        db.collection('productos').doc(element.item.id).update({
                            productStock: doc.data().productStock - element.count,
                        });
                    }
                })
                .catch(e => console.log(e));
        });


    }

    const handleSubmitForm = () => {
        var secondMail = document.getElementById("email2").value;
        if (![formData.nombre, formData.apellido, formData.tel, formData.email, secondMail].includes("")) {
            setTodoCompleto(true);
            if (formData.email === secondMail) {
                setDobleMail(true);
                db.collection('ventas').add(compra)
                    .then(({ id }) => {
                        setIdVenta(id);
                        completarVenta(true);
                        updateStock();
                        clearCart();
                    })
                    .catch(e => console.log(e));
            } else {
                setDobleMail(false);
            }
        } else {
            setTodoCompleto(false);
        }
    }

    return (
        <section className="sectionCart">
            <h3 className="titleCart">Checkout</h3>
            <div className="containerCart">
                {
                    !venta ?
                        <>
                            <table className="cartTable">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.items.map(item =>
                                            <tr key={item.item.id}>
                                                <td>{item.item.data.productTitle}</td>
                                                <td>{item.count}</td>
                                                <td>${item.item.data.productPrice * item.count}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <main className="mainForm">
                                <form>
                                    <div className="col">
                                        <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                                        <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                                        <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />
                                    </div>
                                    <div className="col">
                                        <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                                        <input type="email" id="email2" name="email2" placeholder="Confirme su E-mail" />
                                        <p className={`mensajeMails ${dobleMail ? "hide" : ""}`}>Los mails no coinciden</p>
                                        <p className={`mensajeMails ${todoCompleto ? "hide" : ""}`}>Complete todos los campos</p>
                                    </div>
                                </form>
                            </main>
                            <aside className="cartLastStep">
                                <h2 className="finalPrice">${cart.precioFinal}</h2>
                                <p>Precio Final</p>
                                <button onClick={handleSubmitForm} className="btnCheckout">Pagar</button>
                            </aside>
                        </> :
                        <p className="mensajeError">La compra se realizó correctamente, tu número de seguimiento es: {idVenta}</p>
                }
            </div>
        </section>
    );
}

export default Checkout;