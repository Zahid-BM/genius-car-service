import React from 'react';
import { Button } from 'react-bootstrap';
import UseServices from '../../hooks/UseServices';

const ManageService = () => {
    const [services, setServices] = UseServices();
    const handleDelete = id => {
        const userConfirmation = window.confirm('Are you sure to delete this service ?')
        if (userConfirmation) {
            const url = `https://genius-car-services.onrender.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result.deletedCount === 1) {
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h2 className='text-center my-5'>You can Manage the services</h2>
            {
                services.map(service => <div className='w-50 mx-auto my-4' key={service._id}>
                    <h5 className='text-center'>{service.name} <Button onClick={() => handleDelete(service._id)} className='px-3' variant='danger'>X</Button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;