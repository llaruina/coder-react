import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const agregar = (item, cant) => {
        if (estaEnCarrito(item.id)) {
            setCart(
                cart.map((product) =>
                    product.id === item.id
                        ? { ...product, cantidad: product.cantidad + cant }
                        : product
                )
            );
        } else {
            setCart([...cart, { ...item, cantidad: cant }]);
        }
    };

    const estaEnCarrito = (id) => {
        return cart.some((item) => item.id === id);
    };

    const itemCant = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0);
    };

    const total = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0);
    };

    const vaciar = () => {
        setCart([]);
    };

    const remover = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };




    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            agregar,
            estaEnCarrito,
            itemCant,
            total,
            vaciar,
            remover,
        }}>
            {children}
        </CartContext.Provider>
    );
};
