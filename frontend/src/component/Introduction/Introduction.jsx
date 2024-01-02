import React from "react";
import "./Introduction.css";
import images from "../../constants/images";

const Intro = () => (
    <div className="bg" style = {{
        background: `linear-gradient(rgba(0, 0, 0,0.7), rgba(0, 0, 0, 0.2)), url(${images.bg}) center/cover no-repeat`
    }}>
        {/* <Navbar /> */}

        <div className="container">
            <div className="header__content text__center text__light flex flex__center">
                <div className="header__content--left"></div>
                <div className="header__content--right">
                  <h2 className="para__text">We believe that lasting positive change in the world happens when we empower young people to lead positive action in their communities, through Scouting.</h2>
                  </div>
            </div>
        </div>
    </div>
)

export default Intro;