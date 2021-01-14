import { useState, createContext, useContext } from 'react';

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = {}, children }) {
    const [cart, setCart] = useState(initialValue);

    function addItem(newItem) {
        const newCart = {
            ...cart,
            precioFinal: cart.precioFinal + (newItem.count * newItem.item.productPrice),
            cantidad: cart.cantidad + newItem.count,
            items: [...cart.items, newItem]
        };
        setCart(newCart);
        console.log('item added:', newItem);
    }

    function removeItem(itemId) {
        const indexProduct = cart.items.findIndex(item => {
            return item.item.productId === itemId;
        });
        let copyCart = [...cart.items];
        const products = cart.items[indexProduct];
        const newFinalPrice = cart.precioFinal - (products.count * products.item.productPrice);
        const newCount = cart.cantidad - products.count;
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