import React from "react";

export default function({children, className, ...props}){
    className = `toastpopup-title ${className}`

    return(
        <h3 className={className} {...props}>{children}</h3>
    )
}