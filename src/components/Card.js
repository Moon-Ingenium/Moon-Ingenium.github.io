import React from "react";
import "./components.css";

function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                Contact
        </div>
            <div className="card-body">
                <p><a label="Email" value="Email" href="mailto:robbins.michelle@ymail.com" rel="noopener noreferer" className="fa fa-envelope fa-3x"> </a></p>
                    <p id ="phoneNumber">817-564-1592</p>
                    <p><a href="https://drive.google.com/file/d/1fuvtVmJMDgSXBI6lATkYc6IPvqby-qZL/view?usp=sharing"><i className="fa fa-file fa-3x"></i></a></p>
                    <p><a href="https://www.linkedin.com/in/michelle-moon-4123541ab/"><i className="fa fa-linkedin fa-3x"></i></a></p>
                    <p><a href="https://github.com/Moon-Ingenium"><i className="fa fa-github-square fa-3x"></i></a></p>
            </div>
        </div>
    );
}

export default Card;