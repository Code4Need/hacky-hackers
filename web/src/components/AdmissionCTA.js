import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';

const AdmissionCTA = () => {
    return (
        <Container fluid className="">
            <Row className="bg-success p-2 text-white bg-opacity-75 justify-content-around  align-items-center py-5">
                <Col md={{ span: 6, offset: 1 }}>
                    <h1 className="fw-bolder">
                        READY TO JOIN US?
                    </h1>
                </Col>
                <Col md={{ span: 3, offset: 2 }}>
                    <Button variant="light" href="/login">
                        Join Now
                    </Button>
                </Col>
            </Row>
        </Container >
    )
}

export default AdmissionCTA
