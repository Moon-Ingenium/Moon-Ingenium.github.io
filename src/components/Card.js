import React from "react";
import "./components.css";

function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                Contact
        </div>
            <div className="card-body">
                <ul>
                    <li className="list-group-item">robbins.michelle@ymail.com</li>
                    <li className="list-group-item"><a href="#">Resume</a></li>
                    <li className="list-group-item"><a href="https://www.linkedin.com/in/michelle-moon-4123541ab/"> LinkedIn</a></li>
                    <li className="list-group-item"><a href="https://github.com/Moon-Ingenium">GitHub</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Card;