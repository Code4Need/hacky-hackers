import React from 'react';
import { Card,Button } from 'react-bootstrap';
import '../App.css'

const Subtitle = () => {
  return (
    <div>
      <div className="span"><Card style={{ width: '18rem' }} className="m-5">
        <Card.Body>
          <Card.Title>Your Email</Card.Title>
          <Card.Text>
            <div>Find the job you'll love</div>
            <div> Next Step: Add Recent Education</div>
          </Card.Text>
          <Button variant="primary">Finish Your Profile</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
      
    
  );
};

export default Subtitle;

