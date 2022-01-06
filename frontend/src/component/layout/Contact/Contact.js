import React from "react";
import "./Contact.css";
import { Button, Typography, Avatar } from "@material-ui/core";
const About = () => {
    const visitPortfolio = () => {
        window.location = "https://mayankesh239.github.io/my_portfolio/";
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">MEET THE DEVELOPERS</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/mayankesh/image/upload/v1640595521/avatars/drk3aytbhyvyqczwf11y.jpg"
                            alt="Founder"
                        />
                        <Typography>MAYANKESH JHA</Typography>
                        <Button onClick={visitPortfolio} color="primary">
                            VISIT PORTFOLIO
                        </Button>
                        <span>
                            WEB DEVELOPER | CP ENTHUSIAST
                            <br />
                            <br /> email: mayankesh.ss@gmail.com
                        </span>
                    </div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/mayankesh/image/upload/v1640595521/avatars/drk3aytbhyvyqczwf11y.jpg"
                            alt="Founder"
                        />
                        <Typography>MAYANKESH JHA</Typography>
                        <Button onClick={visitPortfolio} color="primary">
                            VISIT PORTFOLIO
                        </Button>
                        <span>
                            WEB DEVELOPER | CP ENTHUSIAST
                            <br />
                            <br /> email: mayankesh.ss@gmail.com
                        </span>
                    </div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/mayankesh/image/upload/v1640595521/avatars/drk3aytbhyvyqczwf11y.jpg"
                            alt="Founder"
                        />
                        <Typography>MAYANKESH JHA</Typography>
                        <Button onClick={visitPortfolio} color="primary">
                            VISIT PORTFOLIO
                        </Button>
                        <span>
                            WEB DEVELOPER | CP ENTHUSIAST
                            <br />
                            <br /> email: mayankesh.ss@gmail.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;