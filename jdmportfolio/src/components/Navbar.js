import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
    const[selected, setSelect] = useState("home");
    return (
        <div className='visual-aid-border padding-20px'>
            <h1>Nav Div</h1>
            <nav className='visual-aid-border padding-10px flex justify-content-space-between align-items'>
                <Link className="text-decoration-none" to="/about" onClick={() => setSelect("about")}>
                    About
                </Link>
                <Link className="text-decoration-none" to="/projects" onClick={() => setSelect("projects")}>
                    Projects
                </Link>
                <Link className="text-decoration-none" to="/contact" onClick={() => setSelect("contact")}>
                    Contact
                </Link>
                <Link className="text-decoration-none" to="/resume" onClick={() => setSelect("resume")}>
                    Resume
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;