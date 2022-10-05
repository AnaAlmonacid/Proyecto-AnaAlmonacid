import ItemCounter from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../Context/cartContext";


const ItemDetail = ({product}) => {
    const [items, setItems] = useState(1)
    const {addToCart} = useContext(cartContext)

    
    function onAdd(product, items) {
        addToCart(product, items);
    }
    return (
        <div>
            <h3>{product.id}</h3>
            <h2>{product.title}</h2>
            <h3>{product.image}</h3>
            <h2>{product.price}</h2>
            <ItemCounter stock={7} initial={1} items={items} setItems={setItems}/>
            <button className="btnAddToCart" onClick={() => onAdd(product)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemDetail;