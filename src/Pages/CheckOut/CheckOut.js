import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetails from '../../hooks/useServiceDetails';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service, setService] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    /*    const [user, setUser] = useState({
           name: 'Habib',
           email: 'habib@zannat.com',
           address: ' Zannatul Fedaous, Best Place.',
           phone: '015121216456'
       });
       const handleAddressChange = event => {
           const { address, ...rest } = user;
           const newAddress = event.target.value;
           const newUser = { newAddress: newAddress, ...rest };
           setUser(newUser);
           console.log(newUser)
       }; */

    // if (user) {
    //     console.log(user)
    // };

    const handleFormSubmit_for_order_creation = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            serviceId: serviceId,
            serviceName: service.name,
            address: event.target.address.value,
            phone: event.target.phone.value,

        };

        axios.post('https://fierce-fortress-36985.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Order Creation done !!!!')
                    event.target.reset();
                }

            })
            .catch(error => {
                console.dir(error)
            })
    };


    return (
        <div className='border-3 border-info'>
            <h1 className='text-center text-success mb-4'> Now you can book service for {service.name}</h1>
            <Form onSubmit={handleFormSubmit_for_order_creation} className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control readOnly type="text" value={user.displayName} name='name' placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly type="email" value={user.email} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control readOnly type="text" name='service' value={service.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" name='address' value={user.address} placeholder='full address' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword4">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name='phone' placeholder="phone number" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Order Now
                </Button>
            </Form>
            <hr className='w-50 mx-auto my-5' />
            <h3 className='text-center'>OR</h3>
            <div className='text-center my-5'>
                <Link to='/addservice'> <Button variant='primary'>Add a new Service</Button></Link>
            </div>
        </div>
    );
};

export default CheckOut;