import React from "react";
import "../styles/navbar.css"
import Facebook from "../assets/icons/facebook";
import LinkedIn from "../assets/icons/linkedin";
import Github from "../assets/icons/github";


const Footer = ()=> {
    return(
        <div className="flex justify-content-center margin-bottom">
        <div className="border-box-shadow-inverse padding-10px width-75 gradient border-radius-20">
            <footer>
                <ul className="border-box-shadow-inverse flex space-around list-style-type-none padding-10px border-radius-20">
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
        </div>
    )
};

export default Footer;