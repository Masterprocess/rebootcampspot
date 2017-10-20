import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class Calendar extends Component {
	state = {
		classes: []
            
    componentDidMount() {
  }  


render() {
    return(
        <Jumbotron>
            <h1>Calendar</h1>
        </Jumbotron>
            <Container fluid>
                <Row>
                    <Col size="md-8">
                        {!this.state.annoucements.length ? (
                            <h1 className="text-center">No Annoucements to Display</h1>
                        ) : ( 
                            <AnnoucementList>
                                {this.state.Cal.map(Cal => {
                                    return (
                                        <CalListItem
                                            key={Cal.title}
                                            title={Cal.title}
                                            begintime={Cal.btime}
                                            endtime={Cal.etime}
                                        />
                                    </Col>
                    <Col size="md-4">
                    <!----------------------------->
                    </Col>
                </Row>
            </Container>
      
        );
    }
}


export default Calendar;        