import React from "react";
import Top from "../Components/Top/Top";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollections from "../Components/NewCollections/NewCollections";
import News from "../Components/News/News";

const Shop=()=> {
    
    return ( 
        <div>
            <Top/>
            <Popular/>
            <Offer/>
            <NewCollections/>
            <News/>
        </div>
     );
}

export default Shop;