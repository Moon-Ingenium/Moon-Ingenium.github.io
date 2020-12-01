import React from "react";
import "./components.css";

function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                Contact
        </div>
            <div className="card-body">
                <p><a label="Email" value="Email" href="mailto:robbins.michelle@ymail.com" rel="noopener noreferer" className="fa fa-envelope"> </a></p>
                    <p>817-564-1592</p>
                    <p><a href="https://drive.google.com/file/d/1fuvtVmJMDgSXBI6lATkYc6IPvqby-qZL/view?usp=sharing"><i class="fa fa-file"></i></a></p>
                    <p><a href="https://www.linkedin.com/in/michelle-moon-4123541ab/"><i class="fa fa-linkedin"></i></a></p>
                    <p><a href="https://github.com/Moon-Ingenium"><i class="fa fa-github-square"></i></a></p>
            </div>
        </div>
    );
}

export default Card;