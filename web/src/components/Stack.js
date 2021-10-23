import React from 'react'
import { Card } from 'react-bootstrap'
const Stack = () => {
    return (
        <div className="container">
        <div className="m-5">
        <h1 className="text-white">Explore Jobs Near You</h1>
        <p className="text-white">
        Recommendations are based on your profile, job preferences, and activity
        on Glassdoor.
      </p>
        </div>
        
  <div className="row"> 
       
    <div className="col">  
    <a href="icici.com">
     <Card style={{ width: '25rem'}} >
        <Card.Body>
          <Card.Title>ICICI Bank</Card.Title>
          <Card.Text>
            <div>Erelationship Manager</div>
            <div> Delhi</div>
          </Card.Text>
        </Card.Body>
      </Card>
      </a></div>
      <div className="col">  
    <a href="icici.com">
     <Card style={{ width: '25rem'}} >
        <Card.Body>
          <Card.Title>ICICI Bank</Card.Title>
          <Card.Text>
            <div>Erelationship Manager</div>
            <div> Delhi</div>
          </Card.Text>
        </Card.Body>
      </Card>
      </a></div>
    <div className="w-100"></div>
    <div className="col">  
    <a href="icici.com">
     <Card style={{ width: '25rem'}} >
        <Card.Body>
          <Card.Title>ICICI Bank</Card.Title>
          <Card.Text>
            <div>Erelationship Manager</div>
            <div> Delhi</div>
          </Card.Text>
        </Card.Body>
      </Card>
      </a></div>
      <div className="col">  
    <a href="icici.com">
     <Card style={{ width: '25rem'}} >
        <Card.Body>
          <Card.Title>ICICI Bank</Card.Title>
          <Card.Text>
            <div>Erelationship Manager</div>
            <div> Delhi</div>
          </Card.Text>
        </Card.Body>
      </Card>
      </a></div>
  </div>
</div>
    )
}

export default Stack
