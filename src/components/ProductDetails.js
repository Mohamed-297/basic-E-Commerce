import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import Product from "./Product";
export default function ProductDetails(){
    const params=useParams();

    const[product,setProduct]=useState({})

    const api_url='https://fakestoreapi.com/products'
    useEffect(()=>{
        fetch(`${api_url}/${params.proId}`).then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    return(
        <Product
        {
        ...product
    }         
        show={false}
        />  
            
    )
}