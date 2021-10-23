import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import ImageCarousel from '../components/ImageCarousel';
import * as data from "../data"

const AboutUs = () => {
    return (
        <>
            <Container fluid className="text-light my-5">
                <Row className="p-3 p-md-5 bg-warning">
                    <Col>
                        <h2 className="fw-bolder text-dark">About Us</h2>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <ImageCarousel about={true} caption={true} images={data.aboutUsSlider.images} />
                    </Col>
                </Row>

                <Row className="mt-2 justify-content-around align-items-center ">
                    <Col sm={12} md={9}>
                        <Card bg="transparent" text={'white'}>
                            <Card.Body>
                                <Card.Text className="fs-4">
                                    We are team Hacky Hackers and have made this project as a part of the HackThisFall
                                    This is our initiaite to bring up the underrepresented through tech
                                    Its a platform where people can make their account and can apply for jobs .
                                    Weeking coding contest will also orgainise here so don't forget to join us.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* <Timeline /> */}

        </>

    )
}

export default AboutUs
