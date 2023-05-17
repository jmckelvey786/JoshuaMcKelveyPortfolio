import React from "react";
import myResume from "../assets/JDMResume2023.docx"
import ResumeIcon from "../assets/icons/resumeicon";
import "../styles/navbar.css"


const Resume = () => {
  return (
    <div className="flex flex-column align-items">
      <div className="flex flex-column align-items padding-20px margin-20px bg-color-light-cadet border-radius-20 border-box-shadow">
        <div className="flex flex-column align-items padding-20px gradient2 border-radius-20 border-box-shadow">
      <button>
        <div>
          <a href={myResume} download="Resume" className=""><ResumeIcon/></a>
        </div>
      </button>
      <h2>(Click for Resume)</h2>
      <div>
        <h1 className="text-center">My Skills</h1>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Resume;