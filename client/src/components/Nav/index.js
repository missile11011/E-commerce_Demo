import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, Row, Button, Image, Col, Dropdown} from "react-bootstrap";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries";
import Auth from "../../utils/auth";

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
	const { loading, data } = useQuery(QUERY_USER);
	const account = () => {
		if (Auth.loggedIn()) {
			let user;
			if (data){
				user = data.user
				return (
					<Dropdown class="p-3">
						<Dropdown.Toggle class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							{user.firstName}
						</Dropdown.Toggle>
						<Dropdown.Menu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<Dropdown.Item class="dropdown-item" href="#">Action</Dropdown.Item>
							<Dropdown.Item class="dropdown-item" href="#">Another action</Dropdown.Item>
							<Dropdown.Divider/>
							<Dropdown.Item class="dropdown-item" href="#">Logout</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				)
			}
			
		} else {
			return (
				<Link to="/login">
					<button class=" m-3 inline btn btn-primary">Login</button>
				</Link>
			)
		}
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
						{account()}
						{shopingcart()}
					</div>
				</Container>
			</Navbar>
		</>
	);
};

export default NavigationBar;
