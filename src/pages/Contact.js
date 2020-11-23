import React from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Row from "../components/Row";


function Contact(props) {
    return (
        <div>
            <Nav />
            <Container>
                <Row />
                <div className="col-md-6">
                    <div className="card text-center">
                        <div className="card-header">
                            Contact
        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Contact;