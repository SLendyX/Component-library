import React from "react";

export default function({children, className = "", ...props}){
    return <p className={"header " + className} {...props}>{children}</p>
}