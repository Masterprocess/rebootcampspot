import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";

class Stats extends Component {
    state = {
		}
render() {
    return(
			<div>
      <Nav />
      <Jumbotron>
      <div className="Stats"/>
      </Jumbotron>
        <Container>
             <Row>
                <Col size="md-7">
                <h1>Class Stats</h1>
                </Col>
                    <Col size="md-4">

                    </Col>
            </Row>        
        </Container>
			<Footer />
			</div>
);
}
}


export default Stats; 