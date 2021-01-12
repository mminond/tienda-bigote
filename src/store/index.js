import { useState, createContext, useContext } from 'react';

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = {}, children }) {
    const [cart, setCart] = useState(initialValue);

    function addItem(newItem) {
        const newCart = {
            ...cart,
            cantidad: cart.cantidad + newItem.count,
            items: [...cart.items, newItem]
        };
        setCart(newCart);
        console.log('item added:', newItem);
    }

    function removeItem(itemId) {
        const indexProduct = cart.items.findIndex(item => {
            return item.item.productId.toString() === itemId;
        });
        let copyCart = cart.items;
        const newCount = cart.cantidad - cart.items[indexProduct].count;
        copyCart.splice(indexProduct, 1);
        const newCart = {
            ...cart,
            cantidad: newCount,
            items: copyCart
        };
        setCart(newCart);
        console.log('item removed');
    }

    function clearCart() {
        setCart([]);
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
}