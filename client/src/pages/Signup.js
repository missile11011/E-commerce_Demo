import React, {useState} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useMutation} from "@apollo/client";
import Auth from "../utils/auth";
import {CREATEUSER} from "../utils/mutations";

const Signup = () => {
	const [formState, setFormState] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
    validPassword: "",
    confirmPassword: ""
	});
	const [createUser, {error}] = useMutation(CREATEUSER);

	const handelSubmit = async (event) => {
		event.preventDefault();
		if (formState.password === formState.confirmPassword) {
			setFormState({...formState, validPassword: formState.password});
		}
    else{
      setFormState({...formState})
    }
		try {
		const response = await createUser({
			variables: {
				email: formState.email,
				password: formState.validPassword,
				firstName: formState.firstName,
				lastName: formState.lastName,
			},
		});
		const token = response.data.createUser.token;
		Auth.login(token);
		} catch (e){
      console.log(e)
		}
	};

	const handelChange = (event) => {
		const {name, value} = event.target;
		console.log(name, value)
		setFormState({...formState, [name]: value});
	};

	return (
		<div class="col-6 mx-auto py-4">
			<div class="border bg-light rounded rounded-3 p-4">
				<h1 class="text-center">Signup</h1>
				<form onSubmit={handelSubmit}>
          <div className="row">
            <div class="col mb-3">
              <label for="firstName" class="form-label">
                First name
              </label>
              <input
                type="firstName"
                name="firstName"
                class="form-control"
                id="firstName"
                placeholder="Mark"
                required
                onChange={handelChange}
              />
            </div>
            <div class="col mb-3">
              <label for="lastName" class="form-label">
                Last name
              </label>
              <input
                type="lastName"
                name="lastName"
                class="form-control"
                id="lastName"
                placeholder="Otto"
                required
                onChange={handelChange}
              />
            </div>
          </div>
					<div className="row">
            <div class="col mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                required
                onChange={handelChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label for="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                onChange={handelChange}
                />


            </div>
          </div>
					<div className="row">
            <div className="col mb-3">
              <label for="confirmPassword" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="confrimPassword"
                required
                onChange={handelChange}
                />

            </div>
          </div>
					
					<div class="text-center">
						<button class="btn btn-primary" type="submit">
							Submit form
						</button>
					</div>
					{error ? (
						<div>
							<p class="">make sure all fields are required</p>
						</div>
					) : null}
				</form>
			</div>
		</div>
	);
};

export default Signup;
