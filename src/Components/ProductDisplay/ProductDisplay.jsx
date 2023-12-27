import React, { useEffect } from "react";
import './ProductDisplay.scss'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay({data}) {
    useEffect(()=>{
        window.scrollTo(0,0);
      })
    const {addCart}=useContext(ShopContext);
    return ( 
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={data.image} alt="" />
                    <img src={data.image} alt="" />
                    <img src={data.image} alt="" />
                    <img className="last-img" src={data.image} alt="" />
                </div>
                <div className="product-display-img-big">
                    <img src={data.image} alt="" />
                </div>
                
            </div>
            <div className="product-display-right">
                <div className="product-display-right-name">
                    {data.name}
                </div>
                <div className="product-display-right-star">
                       <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />         
                        <p>(112)</p>
                </div>
                <div className="product-display-price">
                    <div className="old-price">
                        ${data.old_price}
                    </div>
                    <div className="new-price">
                        ${data.new_price}
                    </div>
                </div>
                <div className="select-size">
                    <p>Select Size</p>
                    <div className="select-size-predict">
                        <div className="vary-size">S</div>
                        <div className="vary-size">M</div>
                        <div className="vary-size">L</div>
                        <div className="vary-size">XL</div>
                        <div className="vary-size">XXL</div>
                    </div>
                </div>

                <div className="add-to-cart-btn">
                    <button className="btn" onClick={()=>{addCart(data.id);toast.success("Item added succcessfully")}}>Add To Cart</button>
                    <ToastContainer
                    position="bottom-center"
                    autoClose={300}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="colored"
                    />
                </div>
                <div className="category-tag">
                    <p><b>Category </b>: {data.category}, T-shirt</p>
                </div>
                <div className="tag-category">
                    <p><b>Tags </b>: Modern, Latest</p>
                </div>
            </div>
        </div>
     )
}

export default ProductDisplay;