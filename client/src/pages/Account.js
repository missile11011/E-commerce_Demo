import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../utils/queries";
import {Col, Row} from "react-bootstrap";
import{ Link }from "react-router-dom";

const Account =() => {
    const {loading, error, data} = useQuery(QUERY_USER)
    let user;
    
    const userdata = () => {
        if (data){
            user = data.user
            return (
                <div class="">
                    <h4>
                        Name: {user.firstName} {user.lastName}
                    </h4>
                    <h4>
                        Email: {user.email}
                    </h4>
                    
                </div>
            )
    }
    }
    return (
            <Row className="justify-content-md-center py-5">
                <Col md={6}>
                    <h1>Account Info:</h1>
                    {userdata()}
                </Col>
                <a class="text-decoration-underline fs-1">
                    Logout
                </a>
            </Row>
        )
};

export default Account;