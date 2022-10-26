import { useContext, useState } from "react";

const ProductList = () => {

  const value = useContext(DataProvider)
  const [products] = value.products
  console.log(products)

return (        
  <div>
      <h1 className='ProductsTitle'>PRODUCTOS</h1>
      <div className='ProductsContainer'>
          {
              products.map(product => (
              <Products
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              detail={product.detail}
              stock={product.stock}
              />))
          }
      </div>
  </div>
)}

export default ProductList