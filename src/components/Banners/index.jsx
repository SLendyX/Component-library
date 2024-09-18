import React, { Component } from "react";
import Success from "./icons/Succes";
import Error from "./icons/Error";
import Attention from "./icons/Attention";
import Neutral from "./icons/Neutral";
import "./index.css"

export default function Banners({ type = "success", children }) {
    const components = {
        Success: Success,
        Attention: Attention,
        Error: Error,
        Neutral: Neutral
    };

    function createComponent(state) {
        state = state[0].toUpperCase() + state.slice(1)

        const MyComponent = components[state];
        return MyComponent ? <MyComponent /> : null;
    }

    return (
        <div className={`banner banner-${type}`}>
            {createComponent(type)}
            {children}
        </div>
    );
}