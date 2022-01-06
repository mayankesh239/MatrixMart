import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
const About = () => {
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">ABOUT</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/mayankesh/image/upload/v1640595521/avatars/drk3aytbhyvyqczwf11y.jpg"
                            alt="Founder"
                        />
                        <Typography>MATRIX MART</Typography>
                        <span>
                            <br />
                            <br /> This is an ecommerce website developed in mern stack.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;