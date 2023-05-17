import React from "react";
import Profile from "../assets/profile.jpg"
import "../styles/navbar.css"

const About = () => {
  return (
    <div className="flex justify-content-center flex-column align-items margin-20px">
      <div className="gradient2 border-radius-20 border-box-shadow flex justify-content-center flex-column align-items padding-20px max-width-400px">
        <div className="border-box-shadow-inset padding-5px border-radius-20">
      <img
        className="max-width-200px border-radius-20"
        src={Profile}
        alt="Josh Profile"
      />
      </div>
      <div className="bg-color-light-cadet margin-20px border-radius-20 border-box-shadow">
        <p className="text-align color-white padding-20px">
        I am a MERN Stack Web Developer with additional experience in Python, C#, Wordpress, and Elementor. I have a background in
        Management, Sales and Operations. I am self-motivated and independent but also comfortable and adept at leading and working within a
        collaborative environment.
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;