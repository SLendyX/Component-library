import React from "react";
import { FaCloudArrowUp } from "react-icons/fa6";
import "./index.css"

export default function({children, className = "", ...props}){
    
    return (
        <div className={"card" + className} {...props}>
            <div className="card-cloud-icon-container"><FaCloudArrowUp className="card-cloud-icon"/></div>
            {children}
        </div>
    )
}