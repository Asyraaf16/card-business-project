import React from "react";
import picProfile from "../assets/picprofile.jpeg"

export default function Header(){
    return (
        <div className="header--container">
            <img src={picProfile} alt="" width="317px" height="317px"className="img"/>
        </div>
    )
}