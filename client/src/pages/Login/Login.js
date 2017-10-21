import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Col from "../../components/Grid";
import Row from "../../components/Grid";
import Container from "../../components/Grid";
import loginform from "../../components/LoginForm";
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"




const Login = () => {
	return (
		<div>
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
					</Container>
				</div>
);
}

export default Login;