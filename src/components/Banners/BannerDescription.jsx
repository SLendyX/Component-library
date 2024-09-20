import React from "react";

export default function({children, className = "", ...props}){
    return <p className={"description" + className} {...props}>{children}</p>
}