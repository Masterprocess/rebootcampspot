import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import table from "../components/table"

class Dashboard extends Component {
  state = {
    Annoucements: [],
    Homework: ""
  };
  componentDidMount() {
  }
    
render() {
    return(
        <Jumbotron>
            <h1>Dashboard</h1>
        </Jumbotron>
            <Container fluid>
                <Row>
                    <Col size="md-8">
                        <h2>Annoucements</h2>        
                            {!this.state.annoucements.length ? (
                                <h1 className="text-center">No Annoucements to Display</h1>
                            ) : ( 
                                <AnnoucementList>
                                    {this.state.annoucements.map(annoucement => {
                                        return (
                                            <annoucementListItem
                                                key={annoucement.title}
                                                title={annoucement.title}
                                                begindate={annoucement.bdate}
                                                enddate={annoucement.edate}
                                            />
                                        );
                                
                                    }
                                )
                            }
                        </AnnoucementList>
                    </Col>
                    <Col size="md-4">
                        <Calendar />
                        <!----------Google Calendar------------->
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-4">
                        <h3>Attendance</h3>
                        <!----------Attendace Work Graph------------->
                    </Col>
                    <Col size="sm-4">
                        <h3>Homework</h3>
                        <!----------Homework Work Graph------------->
                    </Col>
                    <Col size="sm-4">
                        <h3>Upcoming Homework</h3>
                        <!----------Upcoming Homework------------->
                    </Col>
                </Row>              
            </Container>


export default Dashboard; 