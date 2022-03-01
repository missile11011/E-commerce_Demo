import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Form, Row, Dropdown} from "react-bootstrap";
import { useQuery } from '@apollo/client';
import { TOGGLE_CART } from '../../utils/actions';
import { useSelector, useDispatch } from 'react-redux';
import { QUERY_USER } from "../../utils/queries";
import CartItem from "../CartItem"
import Auth from "../../utils/auth";
import "./index.css";

const NavigationBar = () => {
	// set modal display state
	const dispatch = useDispatch();
	const state = useSelector(state => state)
	const { cart, cartOpen } = state
	const { loading, data } = useQuery(QUERY_USER);

	const toggleCart = () =>{
		dispatch({
			type: TOGGLE_CART})
	}
	const cartTotal = () => {
		let total = 0;
		cart.map((item) => {
			total += item.price * item.purchaseQuantity
		})
		return total.toFixed(2)
	}
	const emptyCart =() => {
		if (Object.keys(cart).length === 0){
			return(<h1 class="text-center">Empty</h1>)
		}
	}
	const shopingcart = () => {
		if (cartOpen) {
			return(
			<>
				<a onClick={toggleCart}>
					<i class="text-white bi bi-bag-x bag-icon" ></i>
				</a>	
			</>
			)
		}
		return (
			<> 
				<a class="" href="#" onClick={toggleCart}>
					<i class="bi bi-bag-fill bag-icon my-auto "></i>
					<span class="text-dark text-center cart-items align-text-bottom">{cart.length}</span>
				</a>	
			</>
			)
	}
	const cartItems = () => {
		if (cartOpen) {	
			return(
				<div class="col-5 cart-menu bg-light p-3 rounded border">
					<a class="row justify-content-end px-4 py-auto" onClick={toggleCart}>
						<i class=" bi-x-circle-fill text-danger"></i>
					</a>
					
					<div class="cart-list overflow-scroll col">
						{cart.map((item) =>{
							return(
								<CartItem key={item.id} item={item}/>
							)
						})}
						{emptyCart()}
					</div>
					<h2>Total: ${cartTotal()}</h2>
					
					<Link to="/cart">
						<button class="btn rounded-pill btn-primary">Checkout</button>
					</Link>
				</div>
			)
		}
		
	}

	
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
			<Navbar variant="light" className="py-0 bg-black" >
				<Container fluid>
					<Navbar.Brand className="text-white" as={Link} to="/">
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
			{cartItems()}
		</>
	);
};

export default NavigationBar;
