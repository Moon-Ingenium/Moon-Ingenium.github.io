import React from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Row from "../components/Row";

function Portfolio(props) {
    return (
        <div>
            <Nav />
            <Container>
            <Row />
            <h1>Portfolio</h1>
            <Row />
            <div class="col-md-6">
                <h1>The Hunger Game</h1>
                <a href="https://s2hon.github.io/TheHungerGame/">
                    <img src="./assests/TheHungerGame.png" alt="Project2" className="img-thumbnail" />
                </a>
            </div>
            <Row />
            <div className="col-md-6">
                <h1>Keep Austin Social</h1>
                <a href="https://enigmatic-brushlands-64346.herokuapp.com/">
                    <img src="./assests/KeepAustinSocial.png" alt="Project2" className="img-thumbnail" />
                </a>
            </div>
            <Row />
            <div className="col-md-6">
                <h1>React Example</h1>
                <a href="https://moon-ingenium.github.io/Employee-Directory/">
                    <img src="./assests/EmployeeDirectory.png" alt="REACTapp" className="img-thumbnail" />
                </a>
            </div>
            </Container>
        </div>
    )
}

export default Portfolio;