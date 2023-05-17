import React from "react";
import Profile from "../assets/profile.jpg"
import "../styles/navbar.css"

const About = () => {
  return (
    <div className="">
      <img
        className="max-width-200px"
        src={Profile}
        alt="Josh Profile"
      />
      <p className="about text">
        I am a MERN Stack Web Developer with additional experience in Python, C#, Wordpress, and Elementor. I have a background in
        Management, Sales and Operations. I am self-motivated and independent but also comfortable and adept at leading and working within a
        collaborative environment.
      </p>
    </div>
  );
};

export default About;