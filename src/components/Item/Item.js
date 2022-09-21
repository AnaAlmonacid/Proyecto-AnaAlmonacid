const Item = ({product, price, image}) => {
    return (
    <div>
        <img width={'180px'} src={image} alt='Imagen Producto'/>
        <h3>{product}</h3>
        <h4>{price}</h4>
    </div>
    )
}

export default Item
