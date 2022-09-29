import CartW from '../CartWidget/cart.png'
import { useContext } from "react";
import { cartContext } from '../Context/cartContext';
import { Link } from 'react-router-dom';


const CartWidget = (product) => {
    const {totalProducts} = useContext(cartContext)
    return (
        <img src={CartW} className="CartW" alt="CartWidget"/>
    )
}

<Link to={'/cart'}> 
<img src={CartW} className="CartW" alt="CartWidget"/>
</Link>

export default CartWidget