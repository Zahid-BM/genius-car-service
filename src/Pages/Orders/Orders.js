import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    console.log(orders)
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://fierce-fortress-36985.herokuapp.com/orders?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data)
                
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')

                }
            }
        };
        getOrders();
    }, [user]);
    return (
        <div>
            <h2 className='text-center mb-4'>Total Orders : {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}>
                    <h4 className='text-center'>Ordered by :  {user.email} <br /> Ordered Service : {order.serviceName}</h4>
                </div>)
            }
        </div>
    );
};

export default Orders;