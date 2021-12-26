import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
    return (
        <div className="contactContainer">
            <a className="mailBtn" href="mailto:unofficiana@gmail.com">
                <Button>Contact: unofficiana@gmail.com</Button>
            </a>
        </div>
    );
};

export default Contact;