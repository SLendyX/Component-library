import React from "react";

export default function({children, className="", ...props}){
    return <p className={"testimonial-author " + className} {...props}>{children}</p>
}