import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList(){
    const [products,setProducts]=useState([])
    const [categories,setCategories]=useState([])
    const api_url='https://fakestoreapi.com/products'
    function getProducts(){
        fetch(`${api_url}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
    }
    const getCategories=()=>{
        fetch(`${api_url}/categories`)
        .then(res=>res.json())
        .then(data=>setCategories(data))
        
    }
    useEffect(()=>{
        getProducts()
        getCategories()
    },[])
    const getProductsInCategory=(catName)=>{
        fetch(`${api_url}/category/${catName}`)
            .then(res=>res.json())
            .then(data=>setProducts(data))
    }
    return(
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="container">
            <button className="btn btn-info " onClick={getProducts}>All</button>
                {
                    categories.map(cat=>{
                        return <button key={cat} onClick={()=>getProductsInCategory(cat)} className="btn btn-info ">{cat}</button>
                    })
                }
            <div className="row">
            {products.map(prod=>{
                return(
                <div key={prod.id} className="col-3">
                    <Product
                        id={prod.id}
                        {...prod}
                        show={true}
                    />  
                </div>
                )
            })}
                    

                </div>

            </div>
        </>
    )
}