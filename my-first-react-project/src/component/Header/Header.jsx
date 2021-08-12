import React from "react";
import "./Header.css";

const Header = ({ blogTitle }) => {
    return (
        <header>
            <h1>{blogTitle}</h1>
        </header>
    )
};

export default Header;