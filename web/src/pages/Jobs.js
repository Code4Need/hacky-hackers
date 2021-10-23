import React from 'react'
import { Container } from 'react-bootstrap';
import Articles from '../components/Articles';
import Subtitle from '../components/Subtitle';
import Stack from '../components/Stack';

import ComapaniesWithUs from '../components/CompaniesWithUs';
const Jobs = () => {
    return (
        <>
            <Container fluid className="mt-5 bg-secondary">
                <Subtitle />
                <Stack />
                <ComapaniesWithUs />
                <Articles />
            </Container>
        </>
    )
}

export default Jobs
