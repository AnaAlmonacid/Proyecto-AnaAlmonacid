function ItemDetail({ product }) {
    return (
        <div>
            <h3>{product.id}</h3>
            <h2>{product.title}</h2>
            <h3>{product.image}</h3>
            <h2>{product.price}</h2>
        </div>
    );
}

export default ItemDetail;