import { useState, useEffect } from 'react';
import './dealsListContainer.scss';
import DealsProductCard from '../../components/Home/dealsProductCard/dealsProductCard'
import AllItems from '../../assets/json/products.json';

function DealsListContainer() {
    const [items, setItems] = useState([]);
    var products = [];
    AllItems.forEach(item => {
        if (item.isDeal) {
            products.push(item);
        }
    });

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });

    useEffect(() => {
        getProducts.then(rta => setItems(rta));
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
                        {products.map(product =>
                            <DealsProductCard key={product.productId}
                                id={product.productId}
                                title={product.productTitle}
                                image={product.productImage}
                                price={product.productPrice}
                                stock={product.productStock}
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