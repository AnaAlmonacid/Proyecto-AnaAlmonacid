import data from "../MockData/MockData"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({}) => {

    const [productList, setProductList] = useState({})

    useEffect(() =>{
        getProduct.then((response)=> {
        setProductList(response)
        });
    }, []);

    const getProduct = new Promise ((res, rej) => {
            setTimeout(() => {
                res(data);
            }, 2000);
        });
    return (
        <>
        <ItemList lista= {productList}/>
        </>
    );
};

/*     return (
        <h2 className="greeting">{greeting}</h2>
    ) */

export default ItemListContainer