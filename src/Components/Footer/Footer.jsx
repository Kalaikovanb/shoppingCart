import React from "react";
import './Footer.scss';
import footer_img from '../Assets/logo_big.png';
import insta from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

function Footer() {
    return (  
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_img} alt="Footer" />
                <p className="footer-logo-para">SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="social-icon">
                <div className="insta">
                    <img src={insta} alt="Instagram" />
                </div>
                <div className="pinterest">
                    <img src={pin} alt="Pintrest" />
                </div>
                <div className="whatsapp">
                    <img src={whatsapp} alt="Whatsapp" />
                </div>
            </div>
            <div className="copyrights">
                Copyright @ 2023 - All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;