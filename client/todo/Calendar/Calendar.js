import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "../components/Grid";
import Row from "../components/Grid";
import Container from "../components/Grid";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

class Calendar extends Component {
	state = {
		classes: []
	}


render() {

    return (
			<div>
			 <Nav/>
       <Jumbotron>
       <h1>Calendar</h1>
       </Jumbotron>
        <Container>
             <Row>
                <Col size="md-7">
                </Col>
                    <Col size="md-5">
                    </Col>
            </Row>
            
            <Row>
             <Col size="md-4">
            </Col>
                <Col size="md-4">
                </Col>
                    <Col size="md-4">
                    </Col>
            </Row>
        </Container>
			<Footer />
			</div>
	)
}
}


export default Calendar;        