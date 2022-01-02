import React from "react";
import { Col, Container, Row } from 'react-bootstrap';

const NavFooter = () => {
	return (
		<>
			<Container fluid className="bg-dark">
                <Row>
                    <div class="col-6 col-md-8 col-lg-7">
                        <div class="row text-center m-auto">
                            <div class="col-sm-6 col-md-4 col-lg-4 col-12 py-4">
                                <ul class="list-unstyled">
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-4 col-12 py-4">
                                <ul class="list-unstyled">
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                    <li class="btn-link"> <a>Link anchor</a> </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-5 col-6 py-4">
                        <address class="text-white">
                            <strong>MyStoreFront, Inc.</strong><br></br>
                            Indian Treasure Link<br></br>
                            Quitman, WA, 99110-0219<br></br>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                        <address  class="text-white">
                            <strong>Full Name</strong><br></br>
                            <a href="mailto:#">first.last@example.com</a>
                        </address>
                    </div>
                </Row>
                <Row>
                    <p class="text-white m-auto p-2" >
                        ©2021 copyrihgt
                    </p>
                </Row>
            </Container>
		</>
	);
};

export default NavFooter;
