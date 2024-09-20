import React from "react";

export default function({children, className = "", logo,...props}){
    return (
        <div className={"testimonial" + className} {...props}>
            {logo && <img className="testimonial-logo" src={logo}/>}
            {children}
        </div>
    )
}