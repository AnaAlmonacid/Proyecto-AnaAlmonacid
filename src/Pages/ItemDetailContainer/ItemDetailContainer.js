import data from "../../components/MockData/MockData";
import { useEffect , useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{

    const [ProductDetail , setProductDetail] = useState([])
    
    useEffect(() => {
        getDetail.then((response)=>{
            setProductDetail(response)
        });
    }, []);
    
    const getDetail =  new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(data.find(()=> data.id === '1'));
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