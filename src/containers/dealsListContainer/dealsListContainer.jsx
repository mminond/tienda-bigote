import { useState, useEffect } from 'react';
import './dealsListContainer.scss';
import DealsProductCard from '../../components/Home/dealsProductCard/dealsProductCard'
import { getFirestore } from '../../db'

function DealsListContainer() {
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getProductsFromDB = () => {
        db.collection('productos')
            .where('isDeal', '==', true)
            .get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({ id: doc.id, data: doc.data() });
                })
                setItems(arr);
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getProductsFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="dealsListContainer">
            <div className="titleDealsListContainer">
                <h3>Ofertas</h3>
            </div>
            {
                items.length ?
                    <div className="itemListProducts">
                        {items.map(product =>
                            <DealsProductCard key={product.id}
                                id={product.id}
                                title={product.data.productTitle}
                                image={product.data.image}
                                price={product.data.productPrice}
                                stock={product.data.productStock}
                            />
                        )}
                    </div> :
                    <div className="cargandoDiv">
                        <p className="cargandoTitulo">Cargando</p>
                    </div>
            }
        </div>
    );
}

export default DealsListContainer;