import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Col from "../../components/Grid";
import Row from "../../components/Grid";
import Container from "../../components/Grid";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";



class Dashboard extends Component {
	state = {

	}
    

render() {
    return(
			<div>
			 <Nav />
       <Jumbotron>
       <h1>Dashboard</h1>
       </Jumbotron>
        <Container>
             <Row>
                <Col size="md-7">
                	<h1>Announcements</h1>
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
			<Footer />
			</div>

)
}
}


export default Dashboard; 