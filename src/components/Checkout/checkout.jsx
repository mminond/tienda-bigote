import { useState } from 'react';
import { useCartContext } from '../../store';
import './checkout.scss';
import { getFirestore } from '../../db';
import firebase from 'firebase/app';

function Checkout() {
    const db = getFirestore();
    const { cart } = useCartContext();
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
    const handleSubmitForm = () => {
        db.collection('ventas').add(compra)
            .then(({ id }) => {
                setIdVenta(id);
                completarVenta(true);
            })
            .catch(e => console.log(e));
    }

    return (
        <section className="sectionCart">
            <h3 className="titleCart">Checkout</h3>
            <div className="containerCart">
                {
                    !venta ?
                        <>
                            <main className="mainForm">
                                <form>
                                    <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                                    <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                                    <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                                    <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />
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