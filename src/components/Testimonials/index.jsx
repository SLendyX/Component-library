import React from "react";
import TestimonialImage from "./TestimonialImage";
import TestimonialNoImage from "./TestimonialNoImage";
import "./index.css"

export default function({src, alt, children, className = "", ...props}){
    return src ? 
        <TestimonialImage src={src} alt={alt}
         className ={className} {...props}>
            {children}
        </TestimonialImage> :
        <TestimonialNoImage className ={className} 
        {...props}>
            {children}
        </TestimonialNoImage>
}