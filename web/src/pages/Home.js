import React from 'react'
import ImageCarousel from '../components/ImageCarousel';
import InfoPane from "../components/InfoPane"
import { Container, Row, Col } from 'react-bootstrap';
import InfiniteSlider from '../components/InfiniteSlider';
import AdmissionCTA from '../components/AdmissionCTA';
import ActivitiesPane from '../components/ActivitiesPane';
import Articles from '../components/Articles';

import * as data from "../data"
import ComapaniesWithUs from '../components/CompaniesWithUs';
const Home = () => {
    return (
        <>
            <Container fluid className="mt-5 bg-secondary bg-opacity-90" >
                <Row>
                    <Col>
                        <ImageCarousel caption={true} images={data.homeSlider.images} content={data.homeSlider.content} />
                    </Col>
                </Row>
                <InfiniteSlider />
                <InfoPane />
                <ActivitiesPane />
                <AdmissionCTA />
                <ComapaniesWithUs />
                <Articles />
            </Container>
        </>
    )
}

export default Home
