import React from "react";
import './header.css';

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMeme()
    }, [])

    function GetMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const Url = allMemeImages[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme, 
            randomImage: Url 
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
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
                        name="topText"
                        value={memeImage.topText}
                        onChange={handleChange}
                        />
                    </label>  
                </div>
                
                <div>
                    <label className="label">
                        <input 
                        type="text"
                        placeholder="Bottom Text"
                        className="form--input"
                        name="bottomText"
                        value={memeImage.bottomText}
                        onChange={handleChange}
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
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div> 
        </main>
    )
}