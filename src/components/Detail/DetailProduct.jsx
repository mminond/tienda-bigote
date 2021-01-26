import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCartContext } from '../../store';
import './detailproduct.scss';
import Item404 from '../Error404/error404';
import CountContainer from '../global/ProductCard/CountContainer';
import { getFirestore } from '../..//db';


function ProductDetail() {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();
    const { addItem } = useCartContext();
    const [count, setCount] = useState(1);
    const db = getFirestore();

    useEffect(() => {
        db.collection('productos')
            .doc(itemId)
            .get()
            .then(doc => {
                if (doc.exists) {
                    setProduct({ id: doc.id, data: doc.data() });
                }
            })
            .catch(e => console.log(e));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const add = () => {
		if (count < product.data.productStock) {
			setCount(count + 1);
		}
	};

	const less = () => {
		setCount(count - 1);
    };
    
    return (
        <>
            {
                product ?
                    <article className="productDetail">
                        <div className="imgProductDetail">
                            <img src={`/img/products/${product.data.image}`} alt="Foto Producto" />
                        </div>
                        <div className="descriptionProductDetail">
                            <h1>{product.data.productTitle}</h1>
                            <h2>${product.data.productPrice}</h2>
                            <h3>Stock Disponible: {product.data.productStock}</h3>
                            <CountContainer stock={product.data.productStock} count={count} add={add} less={less} />
                        </div>
                        <button className="detailAddCart" onClick={() => { addItem({ item: product, count: count }) }}>Agregar al carrito</button>
                    </article> :
                    <Item404 />
            }
        </>
    );
}

export default ProductDetail;