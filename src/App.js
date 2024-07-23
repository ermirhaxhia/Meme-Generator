import React from "react";
import "./App.css";
import Header from "./component/Header";
import Meme from "./component/Meme";
import Footer from "./component/footer";



export default function App() {
    return (
        <div>
            <Header />
            <Meme />
            <Footer />
        </div>
    )
}