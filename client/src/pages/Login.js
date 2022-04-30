import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useMutation} from "@apollo/client";
import Auth from "../utils/auth";
import {LOGIN} from "../utils/mutations";

const Login = () => {
	const [formState, setFormState] = useState({email: "", password: ""});
	const [login, {error}] = useMutation(LOGIN);

	const handelSubmit = async (event) => {
		event.preventDefault();
        console.log(formState.email, formState.password)
		try {
			const response = await login({
				variables: {
					email: formState.email,
					password: formState.password,
				},
			});
			const token = response.data.login.token;
			Auth.login(token);
		} catch (e) {
			console.log(e);
		}
	};

	const handelChange = async (event) => {
		const {name, value} = event.target;
		console.log(name, value)
		setFormState({...formState, [name]: value});
	};

	return (
		<div class="col-6 mx-auto py-4">
			<div class="border bg-light rounded rounded-3 p-4">
				<h1 class="text-center">Login</h1>
				<form onSubmit={handelSubmit}>
					<div className="row">
						<div className="col mb-3">
							<label for="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								name="email"
								className="form-control"
								id="email"
								placeholder="example@email.com"
								required
								onChange={handelChange}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col mb-3">
							<label for="password" className="form-label">
								Password
							</label>
							<input
								type="password"
								name="password"
								className="form-control"
								id="password"
								placeholder="password"
								required
								onChange={handelChange}
							/>
						</div>
					</div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </div>
                    {error ? (
						<div>
							<p class="">make sure all fields are required</p>
						</div>
					) : null}
				</form>
				<Link to="/signup">
					<a class="d-flex justify-content-center p-3">
						Create an account and sign up
					</a>
				</Link>

			</div>
		</div>
	);
};
export default Login;
