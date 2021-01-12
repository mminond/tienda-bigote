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
            return item.item.productId.toString() === itemId;
        });
        console.log(cart.items[indexProduct].count);
        //console.log(cart.items[itemId].item.productPrice);
        let copyCart = cart.items;
        //const newFinalPrice = cart.precioFinal - (cart.items[indexProduct].count * cart.items[itemId].item.productPrice);
        const newCount = cart.cantidad - cart.items[indexProduct].count;
        copyCart.splice(indexProduct, 1);
        const newCart = {
            ...cart,
            //precioFinal:newFinalPrice,
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