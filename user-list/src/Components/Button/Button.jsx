import "./Button.css";
import { useState } from "react";


export const Button = ({isListView, onLayoutChange}) => {

    const buttonText = (isListView) ? "Change to List View" : "Change to Grid View";

    return (
        <button className="buttonClass" onClick={onLayoutChange}>{buttonText}</button>
    )
}