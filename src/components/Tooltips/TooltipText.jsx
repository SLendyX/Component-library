import React from "react"

export default function({children, className="", ...props}){

    className = `tooltip-text ${className}`
    return(
        <p className={className} {...props}>
            {children}
        </p>
    )
}