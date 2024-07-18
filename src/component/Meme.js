import React from "react";
import './header.css';
import memeData from "../memeData";

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)


    function GetMemeImage() {
        const memeArrayData = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArrayData.length)
        const Url = memeArrayData[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme, 
            randomImage: Url 
        }))
    }


    return (
        <main>
            <div className="form">
                <div>
                    <label className="label">
                        <input 
                        type="text"
                        placeholder="Top Text"
                        className="form--input"
                        />
                    </label>  
                </div>
                
                <div>
                    <label className="label">
                        <input 
                        type="text"
                        placeholder="Bottom Text"
                        className="form--input"
                        />
                    </label>
                </div>

                <button
                className="form--button"
                onClick={GetMemeImage}
                >
                    Get a new meme image🖼
                </button>
            </div>

            <div className="meme">
                <img src={memeImage.randomImage} className="meme--image"/>
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div> 
        </main>
    )
}