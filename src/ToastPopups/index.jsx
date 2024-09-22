import React from "react";
import "./index.css"
import { SuccessIcon, WarningIcon, ErrorIcon, InformationIcon } from "./icons/Icons";

export default function({children, mode="success", className="", ...props}){
    const modes = ["success", "warning", "error", "information"]
    const popupRef = React.createRef(null)

    if(!modes.find(modeEl => modeEl === mode))
        throw(new Error(`Mode '${mode}' is not valid`))

    const components = {
        SuccessIcon: SuccessIcon,
        WarningIcon: WarningIcon,
        ErrorIcon: ErrorIcon,
        InformationIcon: InformationIcon
    };

    function createComponent(state) {
        state = state[0].toUpperCase() + state.slice(1)

        state+="Icon"

        const MyComponent = components[state];
        return MyComponent ? <MyComponent className="toastpopup-icon" /> : null;
    }

    className = `toastpopup toastpopup-${mode} ${className}`

    React.useEffect(() => {
        popupRef.current.className += " show"
        setTimeout(() =>{
            popupRef.current.classList.remove("show")
        }, 2500)
    }, [])


    return (
        <div ref={popupRef} className={className} {...props}>
            {createComponent(mode)}
            {children}
        </div>
    )
}