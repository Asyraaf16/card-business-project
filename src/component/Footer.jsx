import React from "react";
import Twitter from "../assets/twitter.png"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Github from "../assets/github-sign.png"

export default function Footer(){
    return (
        <div className="footer--container">
            <a href="https://twitter.com/asyrfadlan" target="_blank">
                <img src={Twitter} alt="" width="45px" height="45px" className="twt"/>
            </a>
            <a href="https://www.facebook.com/mohd.asyraaf.10" target="_blank">
                <img src={Facebook} alt="" width="45px" height="45px" className="fb"/>
            </a>
            <a href="https://www.instagram.com/m.asyraaf16" target="_blank">
                <img src={Instagram} alt="" width="45px" height="45px" className="ig"/>
            </a>
            <a href="https://github.com/Asyraaf16" target="_blank">
                <img src={Github} alt="" width="45px" height="45px" className="gt"/>
            </a>
        </div>
    )
}