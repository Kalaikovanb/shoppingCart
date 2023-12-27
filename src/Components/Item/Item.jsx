import React from "react";
import './Item.scss';
import { Link } from "react-router-dom";

function Item(props) {
    return ( 
        <div className="item">
            <Link to={`/product/${props.id}`} ><img onClick={()=>window.scrollTo(0,0)} src={props.image} alt="Product" /></Link>
            <p>{props.name}</p>
            <div className="item-price">
                <div className="new-price">
                    ${props.new_price}
                </div>
                <div className="old-price">
                    ${props.old_price}
                </div>
            </div>
        </div>
     );
}

export default Item;