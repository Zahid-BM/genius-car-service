import React, { useRef, useState } from 'react';
import { async } from '@firebase/util';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../hooks/useToken';



const Signup = () => {
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [condition, setCondition] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    if (token) {
        navigate('/');
    };

    const handleCheckBox = event => {
        const agree = event.target.checked;
        setCondition(agree);

        console.log(condition);
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: userName });
        toast('Account creation done !!!!');
        console.log(updateProfile());
    };


    return (
        <div className=' container w-25 mx-auto p-4 shadow my-5 rounded'>
            <h2 className='text-center text-primary'>Signup</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={userNameRef} type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={handleCheckBox} type="checkbox" label="Agree with Genius car terms and condition ?" />
                </Form.Group>
                <p className='text-danger'>{error?.message || profileError?.message}</p>
                {
                    condition ? <Button variant="primary" type="submit">
                        Submit
                    </Button> : <Button disabled variant="primary" type="submit">
                        Submit
                    </Button>
                }
            </Form>
            <p className='my-4'>Already have an account ? <Link to='/login' className='text-warning text-decoration-none'>Login</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Signup;