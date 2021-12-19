import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import './footer.css'
const footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>Idhar Kya Dekh Rha Jakar Shoping Kar</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="Appstore" />
                <p>Kripya Paise Udhar Na Mangein</p>
            </div>

            <div className="midFooter">
                <h1>Matrix Mart</h1>
                <p>- a cause of Oniomania</p>
                <p>Copyrights 2021 &copy; Mayankesh Jha</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com/mayankesh__">Instagram</a>
                <a href="http://youtube.com/mayankesh">Youtube</a>
                <a href="https://tinder.com/http://instagram.com/aiseKyaDekhRheHoBro">Tinder</a>
            </div>
        </footer>
    )
}

export default footer
