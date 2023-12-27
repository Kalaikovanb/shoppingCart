import React from "react";
import arrow from '../Assets/breadcrum_arrow.png';
import './Navigation.scss';

function Navigation({data}) {

    return (
        <div className="navigation-nav">
            Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" /> {data.category} <img src={arrow} alt="" /> {data.name} 
        </div>
      )
}

export default Navigation;