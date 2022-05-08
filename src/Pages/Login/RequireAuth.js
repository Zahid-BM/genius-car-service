import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);


    if (loading) {
        return <Loading></Loading>;
    };

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    };
    // console.log(user)
    if (user.providerData[0].providerId === "password" && !user.emailVerified) {
        return <div className='w-50 mx-auto my-5 py-5 border border-warning'>
            <h2 className='text-danger text-center'>Your Email is not Verified!!!</h2>
            <h5 className='text-warning text-center'>Please check email and verify.</h5>
            <h4 className='text-center my-4 text-secondary'>OR</h4>
            <Button onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
            }} className='w-50 mx-auto d-block' variant='info'>Send email verification again?</Button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;