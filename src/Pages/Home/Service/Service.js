import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, img, description } = service;
    const navigate = useNavigate();

    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (

        <Col className='g-4' lg={4}>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className='text-muted fs-3'>$ {price}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => navigateToServiceDetails(_id)} variant="primary">Book Service</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Service;