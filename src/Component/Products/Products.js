import React from 'react'
import Counter from '../ItemCount/ItemCount'


const Products = ({ id, title, price, image, detail, stock}) => {
    return (
        <div>  
            <div className='Products'>
                <div className='ProductsImg'>
                    <img src={image} width="250px" ></img>
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