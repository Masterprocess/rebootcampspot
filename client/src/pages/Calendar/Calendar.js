import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class Dashboard extends Component {
	state = {
		classes: []


render() {
    return(
       <Nav />
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
);
}
}


export default calendar;        