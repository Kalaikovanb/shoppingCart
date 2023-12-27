import React from "react";
import './News.scss';
import { ToastContainer, toast } from "react-toastify";

function News() {
    return ( 
        <div className="news-letter">
            <h2 className="newsletter-h2">Get Exclusive offers on your Mail</h2>
            <p className="newsletter-p">Subscribe For our Newsletter to get updates</p>
            <div className="input-box">
            <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
                <input type="email" className="input-box-input"  placeholder="Enter your Email" />
                <button onClick={()=>{toast.info("This website is under development")}}
                className="input-box-button">Subscribe</button>
            </div>
        </div>
     );
}

export default News;
