import React from 'react';
import Main from '../components/Main'
import { Jumbotron, Container,Image } from 'react-bootstrap';
import Products from "../components/Products"

const Home = () =>{
    return(
        <>
            <Main/>
            <Jumbotron fluid className='bg-white'>
                <Container>
                    <Products/>
                </Container>
            </Jumbotron>
            
        </>
    )
}

export default Home;