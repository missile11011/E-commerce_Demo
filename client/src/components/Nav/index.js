import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

const NavigationBar = () => {
	// set modal display state
	

	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container fluid>
					<Navbar.Brand as={Link} to="/">
						Nav
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbar" />
					<Navbar.Collapse id="navbar">
						<Nav className="ml-auto">
							<Nav.Link as={Link} to="/">
								Link 1
							</Nav.Link>
							<Nav.Link as={Link} to="/">
								Link 2
							</Nav.Link>
							<Nav.Link as={Link} to="/">
								Link 3
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavigationBar;
