const Item = ({product, price, image, detail}) => {
    return (
    <div>
        <div><img src={image} width={'180px'} alt='Imagen Producto'/></div>
        <div>
        <h3>{product}</h3>
        <h4>${price}</h4>
        <h4>{detail}</h4>
        </div>
    </div>
    )
}

export default Item
