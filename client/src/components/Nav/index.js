import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, Row, Button, Image, Col, Dropdown} from "react-bootstrap";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries";
import Auth from "../../utils/auth";
import "./index.css";

const NavigationBar = () => {
	// set modal display state
	const shopingcart = () => {
		return (
			<> 
				<a class="row align-items-center px-2 cart-a" href="#" onClick={console.log("test")}>
					<img class="cart-img" src={process.env.PUBLIC_URL + '/images/shopping-cart.png'}  onClick={console.log("test")}/>
					<p class="text-white text-center cart-items">0</p>
				</a>	
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
					<Dropdown className="m-3">
						<Dropdown.Toggle variant="primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Hello, {user.firstName}
						</Dropdown.Toggle>
						<Dropdown.Menu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<Link to="/account">
								<a class="dropdown-item">Account</a>
							</Link>
							
							<Dropdown.Item class="dropdown-item" href="#">Order History</Dropdown.Item>
							<Dropdown.Divider/>
							<Dropdown.Item class="dropdown-item" onClick={()=> Auth.logout()}>Logout</Dropdown.Item>
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
			<Navbar bg="dark" variant="dark" className="py-0" >
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
