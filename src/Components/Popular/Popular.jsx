import React from "react";
import './Popular.scss';
import data_product from "../Assets/data";
import Item from "../Item/Item";

function Popular() {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr/>
            <div className="popular-women">
                {data_product.map((data,id)=>{
                    return <Item key={id} category={data.category} id={data.id} image={data.image} old_price={data.old_price} name={data.name}  new_price={data.new_price} />
                })}
            </div>
            
        </div>
      );
}

export default Popular;