import React, { useContext } from "react";
import Navigation from "../Components/Navigation/Navigation";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";


const Product=()=>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
    return ( 
        <div className="product">
            <Navigation data={product} />
            <ProductDisplay data={product}/>
        </div>
     );
}

export default Product;