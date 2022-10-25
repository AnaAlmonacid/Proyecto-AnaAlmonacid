import React from 'react'
import foto from '../../Images/BabyYoda.jpg'
const Cart = () => {
    return (
        <div className='cart'>
            <div className='cartClose'>
                <p>X</p>
            
            </div>
            <h2>Cart</h2>
            <div className='cartCart'>

            </div>
            <div className='cartItem'>
                <img src={foto} alt="foto"/>
                    <h3>Title</h3>
                    <p>$Price</p>
            </div>

            <div className='cartPlus'>
                <p>+</p>
            </div> 

            <div className='cartMinus'>
                <p>-</p>
            </div>

            <div className='cartTrash'>
                <p>Eliminar producto</p>
            </div>

            </div>
    )
}

export default Cart