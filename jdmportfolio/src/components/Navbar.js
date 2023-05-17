import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
    const[selected, setSelect] = useState("home");
    return (
        <div className='flex justify-content-center padding-10px'>
        <div className='border-box-shadow padding-20px gradient border-radius-20 width-95'>
            <h1 className='text-shadow'>Joshua Duncan McKelvey</h1>
            <nav className='border-box-shadow padding-10px flex space-around align-items border-radius-20 bg-color-light-cadet'>
                <Link className="text-decoration-none color-white" to="/about" onClick={() => setSelect("about")}>
                    <h2 className='navlinks'>About</h2>
                </Link>
                <Link className="text-decoration-none color-white" to="/projects" onClick={() => setSelect("projects")}>
                    <h2 className='navlinks'>Projects</h2>
                </Link>
                <Link className="text-decoration-none color-white" to="/contact" onClick={() => setSelect("contact")}>
                    <h2 className='navlinks'>Contact</h2>
                </Link>
                <Link className="text-decoration-none color-white" to="/resume" onClick={() => setSelect("resume")}>
                    <h2 className='navlinks'>Resume</h2>
                </Link>
            </nav>
        </div>
        </div>
    );
}

export default Navbar;