import React from "react";
import { Link } from "react-router-dom";
import Frog from "../assets/icons/frog";
import Pantry from "../assets/icons/pantry";
import Nutrition from "../assets/icons/nutrition";
import '../styles/navbar.css'
 

const Card = () => {
    const projects = [
        {
            name: "Launch Pad",
            url: "https://launch-pad.herokuapp.com/",
            githubUrl: "https://github.com/andykb9b13/Launch-Pad",
            image: <Frog />,
            altTxt: "Launch Pad",
            description: "A funding platform for entrepeneurs"
        },
        {
            name: "The Pantry",
            url: "https://andykb9b13.github.io/pantryApp/",
            githubUrl: "https://github.com/andykb9b13/pantryApp",
            image: <Pantry />,
            altTxt: "Pantry",
            description: "A shopping and recipe application"
        },
        {
            name: "Wait-Watchers",
            url: "https://wait-watchers.herokuapp.com/",
            githubUrl: "https://github.com/scottswiger/wait-watchers",
            image: <Nutrition/>,
            altTxt: "Food",
            description: "A Calorie and nutrition tracker"
        },
    ]

    return(
        <div>
            <h2>Project Cards</h2>
            {projects.map((project, i) =>(
                <div className="projectDiv" key={i}>
                    <div className="imageDiv">
                        <h2>{project.name}</h2>
                        <div>{project.image}</div>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="projectLinks">
                        <Link to={project.url}>
                            <h3>Application</h3>
                        </Link>
                        <Link to={project.githubUrl}>
                            <h3>Repo</h3>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Card;
