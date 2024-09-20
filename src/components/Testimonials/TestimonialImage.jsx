import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

export default function({children, src, alt, className = "", ...props}){
    return(
        <div className={"testimonial--image " + className} {...props}>
            <img className="testimonial-image" src={src} alt={alt}/>
            <div>
                <FaQuoteLeft className="testimonial-quotes"/>
                {children}
            </div>
        </div>
    )
}