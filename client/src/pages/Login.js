import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import {useMutation} from "@apollo/client";
import Auth from "../utils/auth";
import { LOGIN } from "../utils/mutations"

const Login = () => {
    const[formState, setFormState] = useState({email: '', password: ''});
    const[login, {error}] = useMutation(LOGIN);

    const handelSubmit = async (event)=> {
        event.preventDefault();
        try {
            const response = await login({
                variables:{ email:formState.email, password:formState.password}
            });
            const token = response.data.login.token;
            Auth.login(token);
        } catch (e){ 
            console.log(e)
        }
    };

    const handelChange = async (event)=> { 
        const {name, value} = event.target;
        // console.log(name, value)
        setFormState({...formState,[name]:value})
    };

    return(
        <div class="col-6 mx-auto py-4">
            <div class="border bg-light rounded rounded-3 p-4">
                <h1 class="text-center">Login</h1>
                <Form onSubmit={handelSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control name ="email" type="email" placeholder="Enter email" onChange={handelChange} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={handelChange}/>
                    </Form.Group>
                    <div class="d-flex mx-auto my-2 justify-content-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    {error ? (
                        <div>
                            <p class="text-center">
                                incorrect email or password
                            </p>
                        </div>
                    ): null}
            </Form>
            <Link to="/signup">
                <a class="d-flex justify-content-center p-3">Create an account and sign up</a>
            </Link>
            </div>
            
        </div>
    )
}; 
export default Login;