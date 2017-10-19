import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import loginform from "../components/LoginForm";





const Login = () => {
	return (
		
			<Container fluid>
				<Row>
					<Col size="md-12">
						<h1>
						Please Sign In
						</h1>
					</Col>
				</Row>
				<Row>
					<Col size="md-12">
						<loginform />
					</Col>
				</Row>
				
);
}
}
export default Login;