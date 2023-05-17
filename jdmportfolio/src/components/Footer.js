import React from "react";
import "../styles/navbar.css"
import Facebook from "../assets/icons/facebook";
import LinkedIn from "../assets/icons/linkedin";
import Github from "../assets/icons/github";


const Footer = ()=> {
    return(
        <div className="visual-aid-border padding-20px">
            <h2>Footer Div</h2>
            <footer>
                <ul className="visual-aid-border flex justify-content-space-between list-style-type-none padding-20px">
                    <li className="">
                            <Github/>
                    </li>
                    <li>
                            <LinkedIn/>
                    </li>
                    <li>
                        <Facebook/>
                    </li>
                </ul>
            </footer>
        </div>
    )
};

export default Footer;