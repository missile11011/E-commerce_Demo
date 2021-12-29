import React from 'react';
import Main from '../components/Main'
import { Jumbotron, Container,Image } from 'react-bootstrap';
const Home = () =>{
    return(
        <>
            <Main/>
            
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                    <h1>Viewing saved books!</h1>
                </Container>
            </Jumbotron>
            
        </>
    )
}

export default Home;