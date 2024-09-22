import React from "react";

export default function({children, className, ...props}){
    className = `toastpopup-text ${className}`

    return(
        <p className={className} {...props}>{children}</p>
    )
}