import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import table from "../components/table"

class Dashboard extends Component {
	state = {
    

render() {
    return(
       <Jumbotron>
       <h1>Dashboard</h1>
       </Jumbotron>
        <Container>
             <Row>
                <Col size="md-7">
                	<h1>Announcements</h1>
                  <Table />
                </Col>
                    <Col size="md-5">
                    	<h1>Calendar</h1>
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
  
);
}
}


export default Dashboard; 