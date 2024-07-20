import React from "react";
import './footer.css' 

export default function Footer() {

    return(
        <footer>

            <div>
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>

            <ul className="social--icon">
                <li href="#">
                    <a>
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li href="#">
                    <a>
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>
                <li href="#">
                    <a>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
                <li href="#">
                    <a>
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
            </ul>

            <ul className="menu"> 
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Service</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Team</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <p>&copy; All Right Reservet By Meme Generator</p>
        </footer>
    )
}