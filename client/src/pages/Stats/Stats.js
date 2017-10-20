import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav"
import Footer from "../components/Footer"

class Stats extends Component {
    state = {

    componentDidMount() {
  }    

render() {
    return(
      <Jumbotron>
        <h1>Class Stats</h1>
      </Jumbotron>  
        <Container>
            <Row>
              <Col size="md-8">
                <h1>Student Stats</h1>
                <!----------Student Stats Pie Chart------------->
              </Col>
              <Col size="md-4">
              <!----------Other Stats------------->
              </Col>
            </Row>        
        </Container>
      );
    }
  }

export default Stats; 