import React from "react";

export default function({children, className="", ...props}){
    return <p className={"testimonial-company" + className} {...props}>
        {children}
        </p>
}