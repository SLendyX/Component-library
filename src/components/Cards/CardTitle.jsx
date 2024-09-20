import React from "react";

export default function({children, className = "", ...props}){


    return <h4 className={"card-title "+className} {...props}>{children}</h4>
}