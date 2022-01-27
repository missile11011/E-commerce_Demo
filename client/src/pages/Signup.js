import React, {useState} from 'react';
import {Form,Button, Row, Col} from "react-bootstrap";
import {useMutation} from "@apollo/client";
import Auth from "../utils/auth";
import { CREATEUSER } from "../utils/mutations"

const Signup = () =>{
    const [formState, setFormState] = useState({email: "", password: "", firstName: "", lastName: ""})
    const [createUser, {error}] = useMutation(CREATEUSER)

    const handelSubmit = async (event)=> {
        event.preventDefault();
        if (formState.password === formState.confirmPassword) {
            setFormState({...formState, validPassword:formState.password})
            return console.log("Password match")
        }
        try {
            const response = await createUser({
                variables:{ email:formState.email, password:formState.validPassword, firstName: formState.firstName, lastName: formState.lastName}
            });
            const token = response.data.createUser.token;
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
    
    return (
        <div class="col-6 mx-auto py-4">
            <div class="border bg-light rounded rounded-3 p-4">
                <h1 class="text-center">Signup</h1>
                <Form onSubmit={handelSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>First name:</Form.Label>
                                <Form.Control name ="firstName" type="firstName" placeholder="John" onChange={handelChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last name:</Form.Label>
                                <Form.Control name ="lastName" type="lastName" placeholder="Doe" onChange={handelChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    
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
                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control name="confirmPassword" type="confirmPassword" placeholder="Password" onChange={handelChange}/>
                    </Form.Group>
                    <div class="d-flex my-2 justify-content-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    {error ? (
                        <div>
                            <p class="">
                                make sure all fields are required
                            </p>
                        </div>
                    ): null}
                </Form>
            </div>
        </div>
    )
}

export default Signup;

