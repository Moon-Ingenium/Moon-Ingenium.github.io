import React from "react";
import "./components.css";

function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                Contact
        </div>
            <div className="card-body">
            <ul class="list-group-flush">
                <li className="list-group-item"><a label="Email" value="Email" href="mailto:robbins.michelle@ymail.com" rel="noopener noreferer" className="fa fa-envelope fa-3x"> </a></li>
                <li className="list-group-item"><a href="tel:+8175641592" style ={{color:"black"}}><svg style ={{color:"black"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                </svg>817-564-1592</a></li>
                <li className="list-group-item"><a href="https://drive.google.com/file/d/1niccmun48HJiBIQHlc4qAXQkam3cjxO5/view?usp=sharing"><i className="fa fa-file fa-3x"></i></a></li>
                <li className="list-group-item"><a href="https://www.linkedin.com/in/michelle-moon-4123541ab/"><i className="fa fa-linkedin fa-3x"></i></a></li>
                <li className="list-group-item"><a href="https://github.com/Moon-Ingenium"><i className="fa fa-github-square fa-3x"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Card;