import React, { Component } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD:client/src/pages/Calendar/Calendar.js
import { Col, Row, Container } from "../../components/Grid";

=======
import Col from "../components/Grid";
import Row from "../components/Grid";
import Container from "../components/Grid";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
>>>>>>> chris:client/todo/Calendar/Calendar.js

class Calendar extends Component {
	state = {
		classes: []
	}


render() {
<<<<<<< HEAD:client/src/pages/Calendar/Calendar.js
    return(
         <Jumbotron>
=======

    return (
			<div>
			 <Nav/>
       <Jumbotron>
>>>>>>> chris:client/todo/Calendar/Calendar.js
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
<<<<<<< HEAD:client/src/pages/Calendar/Calendar.js
      
);
=======
			<Footer />
			</div>
	)
>>>>>>> chris:client/todo/Calendar/Calendar.js
}
}


export default Calendar;        