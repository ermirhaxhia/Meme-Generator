import React from "react";
import './header.css'

export default function Header() {
    return(
        <header className="header">
            <img 
            src="/image/faces-troll.png" alt="troll image" 
            className="header--image"
            />
            <h2 className="header--title">Meme Generatior</h2>
            <h4 className="header--p">Make others laugh</h4>
        </header>
    )
}