import { useState, createContext, useContext } from 'react';

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = {}, children }) {
    const [cart, setCart] = useState(initialValue);
    function addItem(newItem) {
        console.log(cart.items);
        console.log(cart);
        const found = cart.items.find( item => item.item.id === newItem.item.id);
        if(found !== undefined){
            const updateProduct = newItem.item;
            const updateCount = newItem.count + found.count;
            const updateItem = {item: updateProduct, count: updateCount};
            const indexProduct = cart.items.findIndex(item => {
                return item.item.id === newItem.item.id;
            });
            let copyCart = [...cart.items];
            copyCart.splice(indexProduct, 1);
            const newCart = {
                ...cart,
                precioFinal: cart.precioFinal + (newItem.count * newItem.item.data.productPrice),
                cantidad: cart.cantidad + newItem.count,
                items: [...copyCart, updateItem]
            };
            setCart(newCart);
            console.log('item updated:', newItem);
        }else{
            const newCart = {
                ...cart,
                precioFinal: cart.precioFinal + (newItem.count * newItem.item.data.productPrice),
                cantidad: cart.cantidad + newItem.count,
                items: [...cart.items, newItem]
            };
            setCart(newCart);
            console.log('item added:', newItem);
        }
    }

    function removeItem(itemId) {
        const indexProduct = cart.items.findIndex(item => {
            return item.item.productId === itemId;
        });
        let copyCart = [...cart.items];
        const product = cart.items[indexProduct];
        const newFinalPrice = cart.precioFinal - (product.count * product.item.data.productPrice);
        const newCount = cart.cantidad - product.count;
        copyCart.splice(indexProduct, 1);
        const newCart = {
            ...cart,
            precioFinal:newFinalPrice,
            cantidad: newCount,
            items: copyCart
        };
        setCart(newCart);
        console.log('item removed');
    }

    function clearCart() {
        setCart({
            precioFinal: 0,
            cantidad: 0,
            items: []
        });
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
}