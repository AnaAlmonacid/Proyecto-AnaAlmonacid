const Item = ({product, price, image, detail}) => {
    return (
    <div>
        <img src={image} width={'180px'} alt='Imagen Producto'/>
        <div>
        <h3>{product}</h3>
        <h4>${price}</h4>
        <h4>{detail}</h4>
        </div>
    </div>
    )
}

export default Item
