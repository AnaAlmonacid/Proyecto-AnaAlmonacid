import data from "../../components/MockData/MockData";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, getDoc, collection } from "firebase/firestore"



const ItemDetailContainer = () =>{
    
const getProduct = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items');
        getDoc(querySnapshot).then((response) => {
            setProductDetail(response.data());
    })
        .catch((error) => console.log(error));
    };

    const {id} = useParams ();

    const [ProductDetail , setProductDetail] = useState([])
    
    useEffect(() => {
        getDetail.then((response)=>{
            setProductDetail(response)
        });
    }, []);
    
    const getDetail =  new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(data.find(()=> data.id === id));
            } , 2000);
        });
    return (       
    <>  
        {ProductDetail 
        ? (<ItemDetail product={ProductDetail}/>) 
        : (<h3>.....</h3>) 
        }  
    </>
    );
};
export default ItemDetailContainer;