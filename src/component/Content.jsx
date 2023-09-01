import React from "react";
import email from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"

export default function Content(){
    return (
        <div className="content--container">
            <h2 className="name">Muhammad Asyraaf</h2>
            <h3 className="job">Computer Science Student</h3>

            <a href="mailto:mohdasyraa16@gmail.com" target="_blank"><button className="email" type="button">
                <img src={email} alt="" width="17px" height="17px" className="emailimg"/>
                Email
            </button>
            </a>
            
            <a href="https://www.linkedin.com/in/muhammad-asyraaf-916a07241/" target="_blank">
            <button className="linkedln" type="button">
                <img src={linkedin} alt="" width="17px" height="17px" className="lnkimg"/>
                Linkedln
            </button>
            </a>

            <h3 className="about">About</h3>
            <p>
               I'm student from UiTM in Diploma Computer Science. I'm familiar with HTML, CSS, Javascript, React, Java and Python.
               Always looking for improvement and willing to learn something new. Can collaborate with any type of people to achieve goals.
            </p>
            <h3 className="interest">Interest</h3>
            <p className="p2">
                Video Games, Drawing, Coding, Food Hunting, Travel, Coffee Fanatic, Entrepreneur and Technology.
            </p>
        </div>
    )
}