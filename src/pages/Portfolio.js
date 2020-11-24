import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from "../components/Project";
import Footer from "../components/Footer";

function Portfolio(props) {
    return (
        <Wrapper>
            <Nav />
            <Container>
                <Row />
                <h1>Portfolio</h1>
                <Row />
                <Project
                    title="The Hunger Game"
                    href="https://s2hon.github.io/TheHungerGame/"
                    src="./assests/TheHungerGame.png"
                    alt="Project1" className="img-thumbnail" />

                <Row />
                <Project
                    title="Keep Austin Social"
                    href="https://enigmatic-brushlands-64346.herokuapp.com/"
                    src="./assests/KeepAustinSocial.png"
                    alt="Project2" className="img-thumbnail" />
                <Row />
                <Project
                    title="React Example"
                    href="https://moon-ingenium.github.io/Employee-Directory/"
                    src="./assests/EmployeeDirectory.png"
                    alt="REACTapp" className="img-thumbnail" />
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Portfolio;