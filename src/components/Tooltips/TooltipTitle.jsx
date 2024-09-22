import React from "react";
import { TooltipContext } from "./index.jsx";
import { darkMode, lightMode } from './style.js';

export default function({children, className="", style={}, ...props}){
    const {color, mode} = React.useContext(TooltipContext)

    let styles

    if(mode === "light")
        styles = {
            color: lightMode.titleColor[color]
        }
    else if(mode === "bold")
        styles = {
            color: darkMode.titleColor[color]
        }

    styles = {...styles, ...style}

    className = `tooltip-title ${className}`
    return(
        <h3 className={className} style={styles}  {...props}>
            {children}
        </h3>
    )
}