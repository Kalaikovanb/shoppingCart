import React from "react";
import './Top.scss';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import girl_image from '../Assets/hero_image.png'; 


const Top=()=>{
    const redirect=()=>{
        var targetSection = document.getElementById('scrolling');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    return(
        <div className="home-top">
            <div className="home-left">
                <h2>NEW ARRIVALS </h2>
                <div className="hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
                <div onClick={redirect} className="latest-btn">
                    <div className="collection">Latest Collection</div >
                    <img src={arrow} alt="Arrow" />
                </div>
            </div>
            <div className="home-right">
                <img src={girl_image} alt="" />
            </div>
        </div>
    )
}


export default Top;