import data from "../../components/MockData/MockData";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { doc, getFirestore, getDoc } from "firebase/firestore"



const ItemDetailContainer = () =>{
    
    const db = getFirestore();
    const queryDoc = doc(db, 'items', 'XdLjKaO2CE8lJO3jBRs8')
    getDoc(queryDoc).then(res => {console.log(res.data)})

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