import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Project";
import Footer from "../components/Footer";

function Portfolio(props) {
    return (
        <Wrapper>
            <Nav />
            <Container>
                <Row >
                    <h1>Portfolio</h1>
                </Row >
                <Row >
                    <Project
                        title="The Hunger Game"
                        href="https://s2hon.github.io/TheHungerGame/"
                        src="./assests/TheHungerGame.png"
                        alt="Project1" className="img-thumbnail" />
                    <Project
                        title="Keep Austin Social"
                        href="https://enigmatic-brushlands-64346.herokuapp.com/"
                        src="./assests/KeepAustinSocial.png"
                        alt="Project2" className="img-thumbnail" />
                </Row>
                <Row >
                    <Project
                        title="React Example"
                        href="https://moon-ingenium.github.io/Employee-Directory/"
                        src="./assests/EmployeeDirectory.png"
                        alt="REACTapp" className="img-thumbnail" />
                    <Project
                        title="Weather Dashboard"
                        href="https://moon-ingenium.github.io/Weather-Dashboard/"
                        src="./assests/Weather-Dashboard.png"
                        alt="weather forecast" className="img-thumbnail" />
                </Row>
                <Row >
                    <Project
                        title="Password Generator"
                        href="https://moon-ingenium.github.io/Password-Generator/"
                        src="./assests/password-generator.png"
                        alt="A button generates a random string of characters" className="img-thumbnail" />
                    <Project
                        title="Note Taker"
                        href="https://evening-refuge-24096.herokuapp.com/notes"
                        src="./assests/note-taker.png"
                        alt="A note pad" className="img-thumbnail" />
                </Row >
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Portfolio;