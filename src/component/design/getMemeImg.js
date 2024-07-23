import React from "react";
import "./getMemeImgButton.css";

export default function GetMemeImgButton({onClick}) {
    return (
        <button
            className="form--button"
            onClick={onClick}
        >
            Get a new meme image🖼
        </button>
    )
} 