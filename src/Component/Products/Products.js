import React from 'react'
import Counter from '../ItemCount/ItemCount'


const Products = ({ title, price, image, detail}) => {
    return (
        <div>  
            <div className='Products'>
                <div className='ProductsImg'>
                    <img src={image} width="250px" alt='Product' ></img>
                </div>
                <h1>{title}</h1>
                <h3>{detail}</h3>
                <p className='Price'>${price}</p>
                <Counter/>
            </div>            
        </div>
    )
}

export default Products