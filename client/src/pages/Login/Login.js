import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import loginform from "../components/LoginForm";
import Nav from "../components/Nav"
import Footer from "../components/Footer"




const Login = () => {
	return (
		<Nav />
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
					<Footer />
);
}
}
export default Login;