import React from "react";
import classNames from "classnames";
import "./index.css"

export default function({shape = "square", color="gray", children = "Badge", className = "",...props}){
    className = classNames(shape, color, className)
    return(
        <div className={className} {...props}>
            {children}
        </div>
    )
}