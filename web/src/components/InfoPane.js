import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
const AboutUs = () => {
    return (
        <Container fluid>
            <Row >
                
                     <Col sm={12} md={4} >
                        <Card.Body className= "primary__background">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 64"><path d="M44.247 42.833L57.71 56.295a1 1 0 01-1.415 1.415L42.833 44.247A21.92 21.92 0 0128 50C15.85 50 6 40.15 6 28S15.85 6 28 6s22 9.85 22 22a21.92 21.92 0 01-5.753 14.833zm-1.832-.97A19.933 19.933 0 0048 28c0-11.046-8.954-20-20-20S8 16.954 8 28s8.954 20 20 20c5.433 0 10.36-2.166 13.965-5.682a2.02 2.02 0 01.45-.454z" fill="#0caa41" fill-rule="evenodd"></path></svg>
                            <Card.Title>Find the right jobs</Card.Title>
                        </Card.Body>
                    </Col>
                    <Col>
                    <Card.Body>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 64"><g fill="#0caa41" fill-rule="evenodd"><path d="M32 58C17.64 58 6 46.36 6 32S17.64 6 32 6s26 11.64 26 26-11.64 26-26 26zm0-2c13.255 0 24-10.745 24-24S45.255 8 32 8 8 18.745 8 32s10.745 24 24 24z"></path><path d="M38 27c0-2.847-2-5-6-5s-6.004 2-6 5c.003 2.831 1.844 4 5.875 4C36.865 31 40 32.726 40 37c0 4.359-3.135 6.62-7.001 6.956L33 44v3a1 1 0 01-2 0v-3l.001-.053c-3.691-.4-7-3.045-7.001-6.944V37a1 1 0 012 0c0 2.92 2.898 5.008 6 5 3.332-.009 6-1.57 6-5 0-2.83-2.092-4-6.125-4-4.989 0-7.87-1.726-7.875-6-.005-3.726 2.602-6.584 7-6.958V17a1 1 0 112 0v3.039c4.397.351 7 3.049 7 6.961a1 1 0 01-2 0z"></path></g></svg>
                            <Card.Title className="text-white">Compare Salaries</Card.Title>
                        </Card.Body></Col>
                    <Col>
                    <Card.Body className= "primary__background">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 64"><path d="M16 16v-4a4 4 0 014-4h24a4 4 0 014 4v4h7a4 4 0 014 4v18a4.002 4.002 0 01-3 3.874V52a4 4 0 01-4 4H12a4 4 0 01-4-4V41.874A4.002 4.002 0 015 38V20a4 4 0 014-4h7zm0 2H9a2 2 0 00-2 2v18a2 2 0 002 2h10l2 6h20.996L44 40h11a2 2 0 002-2V20a2 2 0 00-2-2H16zm-6 24v10a2 2 0 002 2h40a2 2 0 002-2V42h-8.004L44 48H18.996L17 42h-7zm8-26h28v-4a2 2 0 00-2-2H20a2 2 0 00-2 2v4zm7 22h14a1 1 0 010 2H25a1 1 0 010-2z" fill="#0caa41" fill-rule="evenodd"></path></svg>
                            <Card.Title>Apply to Jobs</Card.Title>
                        </Card.Body></Col>
                    )
                
            </Row>
        </Container>
    )
}

export default AboutUs
