import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Stack  from '../components/Stack';
import Articles from '../components/Articles';

const Admission = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row className="p-3 p-md-5 bg-warning">
                    <Col>
                        <h2 className="fw-bolder text-dark">Companies</h2>
                    </Col>
                </Row>
                <h2 className="text-white">Your Company Preferences</h2>
                <Stack/>
                <Articles />
            </Container>
            
        </>
    )
}

export default Admission
