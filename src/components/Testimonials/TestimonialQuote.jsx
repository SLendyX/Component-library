import React from "react";

export default function({children, className="", ...props}){
    return<p className={"testimonial-quote " + className} {...props}>{children}</p>
}