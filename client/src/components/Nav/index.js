import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, Row, Button, Image, Col} from "react-bootstrap";

const NavigationBar = () => {
	// set modal display state
	const shopingcart = () => {
		return (
			<> <div class="row align-items-center px-2" style={{ columns: "50px"}}>
					<Image src={process.env.PUBLIC_URL + '/images/shopping-cart.png'} style={{ maxHeight: '50px', position: "relative", top: "0px" }}/>
					<p class="text-white text-center" style={{ position: "relative", bottom: "0px", right: "30px"}}>0</p>
				</div>	
			</>
			)
		
	}
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container fluid>
					<Navbar.Brand as={Link} to="/">
						Demo
					</Navbar.Brand>
					<div class="row inline">
						<Form inline as={Row}>
							<Form.Group>
								<Form.Control  type="search" placeholder="search"/>
							</Form.Group>
							<button class="px-3 m-2 btn btn-outline-success" variant="outline-success" type="submit">Search</button>
						</Form>
						<button inline class="m-3 btn btn-primary" variant="primary">Login</button>
						{shopingcart()}
					</div>
				</Container>
			</Navbar>
		</>
	);
};

export default NavigationBar;
