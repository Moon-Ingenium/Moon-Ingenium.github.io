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
            <Container >
                <h1>Portfolio</h1>
                <Row >
                    <Project
                        title="Sushi Junai"
                        link="https://github.com/Moon-Ingenium/sushi-junai"
                        href="https://sushi-junai.herokuapp.com/"
                        src="./assests/sushi-junai.png"
                        alt="sushi restraunt menu" 
                        summary="Sushi Junai's web app is a mobile first interactive menu for the restaurant's all-you-can-eat customers. Diners can add items to their order summary, see the amount those items would've cost, and calculate tip. A timer shows diners how long they have left in their two hour all-you-can-eat dining time. Diners also have the option to create an account and save menu items to their favorites for easy access the next time they dine at Sushi Junai."/>
                    <Project
                        title="Keep Austin Social"
                        link="https://github.com/Moon-Ingenium/KeepAustinSocial"
                        href="https://enigmatic-brushlands-64346.herokuapp.com/"
                        src="./assests/KeepAustinSocial.png"
                        alt="Project2" 
                        summary="A Full Stack app for locals to find reliable information on happy hours, post and interact with other users, and search for businesses by name or zipcode.​"
                        />
                        
                </Row>
                <Row >
                    <Project
                        title="React Example"
                        link="https://github.com/Moon-Ingenium/Employee-Directory"
                        href="https://moon-ingenium.github.io/Employee-Directory/"
                        src="./assests/EmployeeDirectory.png"
                        alt="REACTapp"
                        summary="An Employee directory app used to sort employee positions and organize employee information such as ID, name, occupation and email"
                         />
                    <Project
                        title="Weather Dashboard"
                        link="https://github.com/Moon-Ingenium/Weather-Dashboard"
                        href="https://moon-ingenium.github.io/Weather-Dashboard/"
                        src="./assests/Weather-Dashboard.png"
                        alt="weather forecast" 
                        summary="A weather dashboard for a user to search multiple cities and plan a trip accordingly. Each city diplays current and future conditions. "
                        />
                </Row>
                <Row >
                    <Project
                        title="The Hunger Game"
                        link="https://github.com/Moon-Ingenium/TheHungerGame"
                        href="https://s2hon.github.io/TheHungerGame/"
                        src="./assests/TheHungerGame.png"
                        alt="Project1" 
                        summary="A Front End app intended to make the meal plan process easier. A user can searh health criteria and return random meal recipes, save ingriedents, and search for the nearest grocery store."
                        />
                    <Project
                        title="Password Generator"
                        link="https://github.com/Moon-Ingenium/Password-Generator"
                        href="https://moon-ingenium.github.io/Password-Generator/"
                        src="./assests/password-generator.png"
                        alt="A button generates a random string of characters" 
                        summary="An app to create a random password based off the user's strength criterias. "
                        />
                </Row>
                <Row >
                    <Project
                        title="Note Taker"
                        link="https://github.com/Moon-Ingenium/Note-Taker"
                        href="https://evening-refuge-24096.herokuapp.com/notes"
                        src="./assests/note-taker.png"
                        alt="A note pad"
                        summary="A full stack application that can be used to write, save, and delete notes" />
                </Row >
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Portfolio;