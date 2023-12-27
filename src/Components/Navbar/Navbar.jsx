import React, { useContext, useEffect, useRef, useState } from "react";
import './Navbar.scss';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import drop from '../Assets/nav_drop.png';


function Navbar() {
    const [menu,setMenu]=useState("shop");
    const menuRef=useRef();
    const mobile_res=useRef()
    const {totalcartitems}=useContext(ShopContext);

    useEffect(()=>{
        window.scrollTo(0,0);
      }, [menu])

      useEffect(() => {
        localStorage.setItem('menu', menu);
    }, [menu]);
    const nav_open=(e)=>{
        mobile_res.current.classList.toggle('mobile_response');
        e.target.classList.toggle('visible');
    }
    return (
        <div className="navbar">
            <div className="navbar-cart-img">
                <img src={logo} alt="Shoppy" />
                <Link onClick={()=>{setMenu("shop")}} to="/shoppingCart" style={{textDecoration:"none"}}><p>SHOPPER</p></Link>
            </div>
            {/* <img onClick={nav_open} className='nav-dropdown-img' src={drop} alt="" /> */}
            <ul ref={menuRef} className="nav-options">
                <li onClick={()=>{setMenu("shop")}}><Link to="/shoppingCart" style={{textDecoration:"none"}}>Home</Link> {(menu==="shop") ? <hr/> :""}</li>   
                <li onClick={()=>{setMenu("men")}}><Link to="/shoppingCart/men" style={{textDecoration:"none"}}>Men</Link> {(menu==="men") ? <hr/> :""}</li>   
                <li onClick={()=>{setMenu("women")}}><Link to="/shoppingCart/women" style={{textDecoration:"none"}}>Women</Link> {(menu==="women") ? <hr/> :""}</li>   
                <li onClick={()=>{setMenu("kids")}}><Link to="/shoppingCart/kids" style={{textDecoration:"none"}}>Kids</Link> {(menu==="kids") ? <hr/> :""}</li>    
            </ul>
            <div className="login-cart">
                <Link to='/shoppingCart/register'><button>Login</button></Link>
                <Link to='/shoppingCart/cart' onClick={window.scrollTo(0,0)} style={{textDecoration:"none"}}> 
                    <div className="cart-img">
                        <img src={cart_icon} alt="" />
                        <div className="cart-img-count">
                            {totalcartitems()}
                        </div>
                    </div>   
                </Link>  
            </div> 
            <img onClick={nav_open} className='nav-dropdown-img' src={drop} alt="" />   
            <ul ref={mobile_res} className="nav-options nav-options-visible">
                <li onClick={()=>{setMenu("shop")}}><Link to="/shoppingCart" style={{textDecoration:"none"}}>Home</Link> {(menu==="shop") ? <hr/> :""}</li>   
                <li onClick={()=>{setMenu("men")}}><Link to="/shoppingCart/men" style={{textDecoration:"none"}}>Men</Link> {(menu==="men") ? <hr/> :""}</li>   
                <li onClick={()=>{setMenu("women")}}><Link to="/shoppingCart/women" style={{textDecoration:"none"}}>Women</Link> {(menu==="women") ? <hr/> :""}</li>   
                <li onClick={()=>{setMenu("kids")}}><Link to="/shoppingCart/kids" style={{textDecoration:"none"}}>Kids</Link> {(menu==="kids") ? <hr/> :""}</li>    
            </ul>     
        </div>
     )
}

export default Navbar;