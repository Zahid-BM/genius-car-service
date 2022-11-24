import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://genius-car-services.onrender.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div id='services' className='my-5'>

            <Container >
                <h1 className='text-center text-primary my-3'>Our Services</h1>
                <Row>

                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Services;