/* import { useEffect , useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore , doc , getDoc} from 'firebase/firestore';



const ItemDetailContainer = () =>{

    const {id} = useParams();
    const [ProductDetail , setProductDetail] = useState([])
    const db = getFirestore();
    
    
    useEffect(() => {
        getDetail();
        } , [id]);

    const getDetail = () => {
        const queryDoc = doc (db, 'product', id)
        getDoc(queryDoc)
        .then((response) => {
            setProductDetail(response.data());
    })
        .catch((error) => console.log(error));
    };

    return (
        <>  
            {ProductDetail 
            ? (<ItemDetail detalle={ProductDetail}/>) 
            : (<h3>...</h3>) 
            }  
        </>
    );
};
export default ItemDetailContainer; */