import React from "react";
import './NewCollections.scss';
import new_collections from '../Assets/new_collections';
import Item from "../Item/Item";

function NewCollections() {
    return (
        <div className="new-collection" id="new-collection">
            <h1>NEW COLLECTION</h1>
            <hr/>
            <div className="collection-map">
                {new_collections.map((data,id)=>{
                    return <Item key={id} category={data.category} id={data.id} image={data.image} old_price={data.old_price} name={data.name}  new_price={data.new_price} />
                })}
            </div>
            
        </div>
      );
}

export default NewCollections;