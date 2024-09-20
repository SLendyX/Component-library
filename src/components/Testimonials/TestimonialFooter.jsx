import React from "react";

export default function({children, className = "", ...props}){
    return <footer className={"testimonial-footer " + className} {...props}>
                {children}
            </footer>
}