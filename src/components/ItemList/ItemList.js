import Item from "../Item/Item"
import { Link } from "react-router-dom";

const ItemList = ({lista}) => {

    return (
        <div>
            {
            lista.map((product) => (
            <Link key= {product.id} to={'/detail/'+Item.id} style={{textDecoration: 'none'}}>
                <Item
                image={product.image}
                title={product.producto}  
                price={product.price} 
                detail={product.detail} 
                />
            </Link>
            ))}
        </div>
    );
};

export default ItemList;
