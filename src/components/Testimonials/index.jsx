import React from "react";
import TestimonialImage from "./TestimonialImage";
import TestimonialNoImage from "./TestimonialNoImage";
import "./index.css"

export default function({src, alt, children, logo,className = "", ...props}){
    return src ? 
        <div className="testimonial-container">
            <TestimonialImage src={src} alt={alt}
            className ={className} {...props}>
                {children}
            </TestimonialImage>
        </div> :
        <div className="testimonial-container">
            <TestimonialNoImage logo={logo} className ={className} 
            {...props}>
                {children}
            </TestimonialNoImage>
        </div>
}