import React from "react";
import './header.css';
import headerImage from '../../Pages/Images/Header.jpeg'

export default function Header() {

    return (
        <img className="pic" src={headerImage} alt="header" />
    )
}