import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Navbar(){

    const items = useSelector((state) => state.cart);

    return(
        <div className="navbar">
            <span className="logo">FlopKart</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link to="/cart" className="navLink" >Cart</Link>
                <span className="cartCount">Cart Items : {items.length}</span>
            </div>
        </div>
    )
}