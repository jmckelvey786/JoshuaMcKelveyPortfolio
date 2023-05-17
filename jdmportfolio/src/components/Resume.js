import React from "react";
import myResume from "../assets/JDMResume2023.docx"
import ResumeIcon from "../assets/icons/resumeicon";


const Resume = () => {
  return (
    <div className="">
      <p>(click to download)</p>
      <button>
        <div>
          <a href={myResume} download="Resume" className=""><ResumeIcon/></a>
        </div>
      </button>
      <div>
        <h2 className="text-center">My Skills</h2>
      </div>
    </div>
  );
};

export default Resume;