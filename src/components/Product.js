import { Link } from "react-router-dom";

export default function Product(props){
    
    return(
        <>
        <div className="card" >
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">Price: {props.price}$</p>
                
                {props.show&&<Link className="btn btn-primary" to={`/product/${props.id}`}>Go somewhere</Link>}
            </div>
        </div>
        </>
    )
}