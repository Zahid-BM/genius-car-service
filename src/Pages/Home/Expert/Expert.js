import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name,img } = expert;
    return (
        <Col className='g-4' lg={4}>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum sunt nemo. Possimus sint voluptates modi alias vero ipsa eum.
                    </Card.Text>
                    <Button variant="primary">Book Service</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;