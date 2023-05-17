import React from "react";
import { Link } from "react-router-dom";
import Frog from "../assets/icons/frog";
import Pantry from "../assets/icons/pantry";
import Nutrition from "../assets/icons/nutrition";
import pantryImg from "../assets/pantry.png";
import launch from "../assets/launch.png";
import food from "../assets/food.jpg";

import '../styles/navbar.css'
 

const Card = () => {
    const projects = [
        {
            name: "Launch Pad",
            url: "https://launch-pad.herokuapp.com/",
            githubUrl: "https://github.com/andykb9b13/Launch-Pad",
            image: <Frog />,
            hidden: launch,
            altTxt: "Launch Pad",
            description: "A funding platform for entrepeneurs"
        },
        {
            name: "The Pantry",
            url: "https://andykb9b13.github.io/pantryApp/",
            githubUrl: "https://github.com/andykb9b13/pantryApp",
            image: <Pantry />,
            hidden: pantryImg,
            altTxt: "Pantry",
            description: "A shopping and recipe application"
        },
        {
            name: "Wait-Watchers",
            url: "https://wait-watchers.herokuapp.com/",
            githubUrl: "https://github.com/scottswiger/wait-watchers",
            image: <Nutrition/>,
            hidden: food,
            altTxt: "Food",
            description: "A Calorie and nutrition tracker"
        },
    ]

    return(
        <div className="flex flex-column padding-10px margin-10px">
            <h2 className="width-100 text-align">Projects</h2>
            <div className="flex flex-row justify-content-center space-around">
            {projects.map((project, i) =>(
                <div className="projectDiv border-box-shadow margin-5px justify-content-center align-items padding-10px margin-10px bg-color-light-cadet  border-radius-20" key={i}>
                    <div className="gradient2 padding-10px border-radius-20 projectDiv">
                    <div className="imageDiv flex flex-column justify-content-center align-items">
                        <h2 className="border-box-shadow padding-10px bg-color-light-cadet color-white border-radius-20">{project.name}</h2>
                        <div className="">{project.image}</div>
                        <img className="hiddenpics border-box-shadow-inset" src={project.hidden} alt={project.altTxt}/>
                    </div>
                    <div className="flex flex-column justify-content-center align-items border padding-5px border-radius-20">
                        <h4>Description:</h4>
                        <p className="text-align">{project.description}</p>
                    </div>
                    <div className="projectLinks flex justify-content-center align-items padding-10px">
                        <Link className="text-decoration-none list-style-type-none padding-10px" to={project.url}>
                            <h3>Application</h3>
                        </Link>
                        <Link className="text-decoration-none list-style-type-none padding-10px" to={project.githubUrl}>
                            <h3>Repo</h3>
                        </Link>
                    </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
};

export default Card;
