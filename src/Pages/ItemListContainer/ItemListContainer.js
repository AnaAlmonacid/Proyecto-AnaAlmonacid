/* import data from "../../components/MockData/MockData" */
import { useEffect, useState } from "react"
/* import ItemList from "../../components/ItemList/ItemList" */
import { getFirestore, collection, getDocs } from "firebase/firestore"

const ItemListContainer = ({}) => {

    const [productList, setProductList] = useState([])

    const getProduct = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items');
        getDocs(querySnapshot).then((response) => {
            const data = response.docs.map((doc) => {
                return doc.data();
            });
            setProductList(data);
            console.log (getProduct)
        });
    }

        
/*     useEffect(() => {
        getProduct.then((response)=> {
        setProductList(response)
        });
    }, []); */

/*     return (
        <>
        <ItemList lista= {productList}/>
        </>
    ); */
};

export default ItemListContainer