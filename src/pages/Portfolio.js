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
                <h1>Portfolio</h1>
                <Row >
                    <Project
                        title="Sushi Junai"
                        link="https://github.com/Moon-Ingenium/sushi-junai"
                        href="https://sushi-junai.herokuapp.com/"
                        src="./assests/sushi-junai.png"
                        alt="sushi restraunt menu" />
                    <Project
                        title="Keep Austin Social"
                        link="https://github.com/Moon-Ingenium/KeepAustinSocial"
                        href="https://enigmatic-brushlands-64346.herokuapp.com/"
                        src="./assests/KeepAustinSocial.png"
                        alt="Project2" />

                </Row>
                <Row >
                    <Project
                        title="React Example"
                        link="https://github.com/Moon-Ingenium/Employee-Directory"
                        href="https://moon-ingenium.github.io/Employee-Directory/"
                        src="./assests/EmployeeDirectory.png"
                        alt="REACTapp" />
                    <Project
                        title="Weather Dashboard"
                        link="https://github.com/Moon-Ingenium/Weather-Dashboard"
                        href="https://moon-ingenium.github.io/Weather-Dashboard/"
                        src="./assests/Weather-Dashboard.png"
                        alt="weather forecast" />
                </Row>
                <Row >
                    <Project
                        title="The Hunger Game"
                        link="https://github.com/Moon-Ingenium/TheHungerGame"
                        href="https://s2hon.github.io/TheHungerGame/"
                        src="./assests/TheHungerGame.png"
                        alt="Project1" />
                    <Project
                        title="Password Generator"
                        link="https://github.com/Moon-Ingenium/Password-Generator"
                        href="https://moon-ingenium.github.io/Password-Generator/"
                        src="./assests/password-generator.png"
                        alt="A button generates a random string of characters" />
                </Row>
                <Row >
                    <Project
                        title="Note Taker"
                        link="https://github.com/Moon-Ingenium/Note-Taker"
                        href="https://evening-refuge-24096.herokuapp.com/notes"
                        src="./assests/note-taker.png"
                        alt="A note pad" />
                </Row >
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Portfolio;