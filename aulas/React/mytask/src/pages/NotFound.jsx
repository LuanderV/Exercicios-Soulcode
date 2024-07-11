import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className="container mt-4">
      <Card className="text-center">
        <Card.Header>404</Card.Header>
        <Card.Body>
          <Card.Title>Page Not Found</Card.Title>
          <Card.Text>
            The page you are looking for does not exist.
          </Card.Text>
          <Button variant="primary" href="/">Go to Home</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotFound;
