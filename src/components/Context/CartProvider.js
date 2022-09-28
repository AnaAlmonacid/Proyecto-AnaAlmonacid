import { cartContext } from "./cartContext";
import {  useState } from "react";

export const CartProvider = ({children}) => {
    const [cart , setCart] = useState([]);

    const addToCart = (product, items) => {
        if (isInCart(product.id)) {
            alert('Ya se encuentra en el carrito');
        }
        else{
            setCart([...cart, {...product, items}]);
        }
    };
    const isInCart = (id) => {
        return cart.some((product)=> product.id === id);
    };
    const clearCart = () => {
        setCart([]);
    };
    const totalProducts = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.cantidad, 0);
    }

return(
    <cartContext.Provider value={{cart, addToCart, clearCart, totalProducts}}>
        {children}
    </cartContext.Provider>
)
    }