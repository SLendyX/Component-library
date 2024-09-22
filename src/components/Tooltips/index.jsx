import React from 'react';
import "./index.css";
import { darkMode, lightMode } from './style.js';
import { InboxIcon, CloseIcon } from "./icons/Icon.jsx"

export const TooltipContext = React.createContext()

export default function({children, color="default", mode="light", style={},className="", ...props}){
    const containerRef = React.useRef(null)
    const colors = ["default", "blue", "green", "pink"]
    const [isHidden, setIsHidden] = React.useState(false)

    if(!colors.find(colour => colour === color))
        throw(new Error("Invalid color specified for Tooltip component"))

    let styles, iconStyles

    if(mode === "light"){
        styles = {
            backgroundColor: lightMode.backGround[color],
            color: lightMode.textColor[color]
        }

        iconStyles = {
            iconColor: lightMode.iconColor[color],
            xColor: lightMode.xColor[color]
        }
    }
    else if(mode === "bold"){
        styles = {
            backgroundColor: darkMode.backGround[color],
            color: darkMode.textColor[color]
        }

        iconStyles = {
            iconColor: darkMode.iconColor[color],
            xColor: darkMode.xColor[color]
        }
    }else
        throw(new Error("Invalid mode for Tooltip component"))

    styles = {...styles, ...style}

    className = `tooltip-container ${className}`

    function hideTooltip(){
        setIsHidden(oldIsHidden => !oldIsHidden)
    }


    React.useEffect(() => {
        containerRef.current.style.setProperty("--arrow-color", styles.backgroundColor)
    }, [])

    return (
        !isHidden && <TooltipContext.Provider value={{color, mode}}>
            <div ref={containerRef} style={styles} className={className} {...props}>
                <InboxIcon color={iconStyles.iconColor} className="tooltip-icon"/>
                <button onClick={hideTooltip} className='tooltip-close-btn'>
                    <CloseIcon color={iconStyles.xColor}/>
                </button>
                {children}
            </div>
        </TooltipContext.Provider>
    )
}