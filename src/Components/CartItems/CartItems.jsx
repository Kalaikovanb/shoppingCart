import React, { useContext, useEffect } from "react";
import './CartItems.scss';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';
import { Flip, ToastContainer, toast } from "react-toastify";

function CartItems() {
    const {all_product,removeCart,cartItems,totalamount}=useContext(ShopContext);
   let tot=0;
   useEffect(()=>{
    window.scrollTo(0,0);
  })
    for (let item in cartItems){
        if(cartItems[item]>0){
            tot+=cartItems[item]
        }
    }
    if(tot>0)
    {
        return ( 
        <div className="cart-items">
            
            <div className="cart-left format-option-main-js">
                <p>Products</p>
                <p>Title</p> 
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div><hr/>
            {all_product.map((data,index)=>{
                if(cartItems[data.id]>0){
                    return( <div  key={index}>
                        
                    <div className="cart-item-right format-option-main-js" >
                        <img className="main-image" src={data.image} alt="" />
                        <p>{data.name}</p> 
                        <p>{data.new_price}</p>
                        <p>{cartItems[data.id]}</p>
                        <img onClick={()=>{removeCart(data.id);toast.error("Item Removed Successfully")
                        }} className="remove-image" src={remove_icon} alt="" />
                        <ToastContainer
                        position="bottom-center"
                        autoClose={300}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        transition={Flip}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                        theme="colored"
                        />
                    </div><hr/>
                    </div>
                    )                  
                    }
                    else{
                        return null;
                    }
            })}
            <div className="total-item">
                <h2 className="total-item-head">Cart Total</h2>
                <div className="subtotal flex-the-content">
                    <p>Subtotal</p>
                    <p>${totalamount()}</p>
                </div><hr/>
                <div className="shipping flex-the-content">
                    <p>Shipping</p>
                    <p>Free</p>
                </div><hr/>
                <div className="total flex-the-content">
                    <p><b>Total</b></p>
                    <p><b>${totalamount()}</b></p>
                </div><hr/>
                <button className="proceed-btn" onClick={()=>{
                    toast.info("This Website is under development")
                }}>Proceed to Checkout</button>
            </div>

        </div>
     )
    }else
    {
        return <div className="else-cart-items">
            Cart is Empty
        </div>
    }
}

export default CartItems;