import React from "react";

export default function({children, className = "", ...props}){
    return (
        <div className={"testimonial" + className} {...props}>{children}</div>
    )
}