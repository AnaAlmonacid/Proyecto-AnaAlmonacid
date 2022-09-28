import CartW from '../CartWidget/cart.png'
import { useContext } from "react";
import { cartContext } from '../Context/cartContext';
import { NavLink } from 'react-router-dom';


const CartWidget = (product) => {
    const {totalProducts} = useContext(cartContext)
    return (
        <img src={CartW} className="CartW" alt="CartWidget"/>
    )
}

<NavLink to={'/cart'}> 
<img className="cartWidget" alt={"CartWidget"} src={CartW}/>
</NavLink>

export default CartWidget