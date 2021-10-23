import React from 'react'
import InfoPane from "../components/InfoPane"
import { Container} from 'react-bootstrap';
import Articles from '../components/Articles';
import Subtitle from '../components/Subtitle';


import ComapaniesWithUs from '../components/CompaniesWithUs';
const Jobs = () => {
    return (
        <>
            <Container fluid className="mt-5 bg-secondary">
                <Subtitle/>
                <ComapaniesWithUs />
                <Articles />
            </Container>
        </>
    )
}

export default Jobs
