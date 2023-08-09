import { useEffect, useState } from "react"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {add} from "../store/cartSlice"
import { STATUSES, fetchProducts } from "../store/productSlice";

export default function Products() {
    // let [products, setProducts] = useState([]);
    let {data,status} = useSelector((state)=>state.products);
    
    let dispatch = useDispatch();

    let handleAdd = (product)=>{
        dispatch(add(product))    
    }

    useEffect(() => {
        // axios.get("https://fakestoreapi.com/products")
        //     .then((res) => {setProducts(res.data);
        //     })
        const getProducts = async ()=>{
            dispatch(fetchProducts());
        }
        getProducts();
    }, [])

    if(status == STATUSES.LOADING) return <h1>LOADING...</h1>;
    if(status == STATUSES.ERROR) return <h1>OOPS! SOMETHING WENT WRONG</h1>

    return (
        <div className="productsWrapper">
            {data.map((item) => {
                return <div key={item.id} className="card">
                    <img src={item.image} />
                    <h6>{item.title}</h6>
                    <h5>{item.price}$</h5>
                    <button onClick={()=>handleAdd(item)} className="btn">Add to Cart</button>
                    </div>
            })
        }
        </div>
    )
}