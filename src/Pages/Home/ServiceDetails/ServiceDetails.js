import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useServiceDetails(serviceId);
    return (
        <div>
            <h1>You are about to book : {service.name}</h1>
            <div className='text-center my-5'>
                <Link to={`/checkout/${serviceId}`}> <Button variant='primary'>Proceed for Checkout</Button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;