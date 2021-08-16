import React, { useState } from 'react';
import "./Header.css";


export const Header = () => {

    const [selected, changeGrid] = useState(false);
    
    const buttonText = (selected) ? "Change to List View" : "Change to Grid View";

    const onSelect = () => {
        changeGrid(!selected)
    }

    return (
        <header>
            <h1>React Users</h1>
            <button onClick={onSelect}>{buttonText}</button>
        </header>
    )
}

