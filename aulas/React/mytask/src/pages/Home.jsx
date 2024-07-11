import React from 'react';
import { Card, Button, Tab, Tabs } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="container mt-4">
      <Tabs defaultActiveKey="profile" className="mb-3">
        <Tab eventKey="home" title="Test1">
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero explicabo placeat corrupti beatae, numquam, voluptatum sit, harum soluta reprehenderit mollitia praesentium fugiat vitae esse asperiores rerum porro tempore earum?
              </Card.Text>
              <Button variant="primary">Clique aqui</Button>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="profile" title="Test2">
          <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam molestias eos ipsa. Itaque vero impedit laboriosam sint recusandae enim ipsa quis! Ratione eos aliquam ut natus rem aut atque!
              </Card.Text>
              <Button variant="primary">Clique aqui</Button>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Home;
