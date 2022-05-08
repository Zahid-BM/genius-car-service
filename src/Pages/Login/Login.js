import { async } from '@firebase/util';
import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetPassError] = useSendPasswordResetEmail(auth); /* clean code */
    const [token] = useToken(user);
    console.log(token)

    if (token) {
        navigate(from, { replace: true });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
       
        if (user) {
            toast('login success');
        }
        console.log(email, password);
    };
    const handleResetPass = async () => {
        const email = emailRef.current.value;
        if (!email) {
            return toast('Please input your email')
        }
        else {
            await sendPasswordResetEmail(email);
            toast('Sent email for password reset');
        }

    };
    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col lg={8}>
                        <img className='w-100 rounded-3 h-100' src="https://cdn.pixabay.com/photo/2020/08/09/14/25/lines-5475657_960_720.jpg" alt="" />
                    </Col>
                    <Col className='my-auto shadow p-5' lg={4}>
                        <h2 className='text-center text-primary'>Login</h2>
                        <Form onSubmit={handleFormSubmit}>
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
                            <p className='text-danger my-2'>{error?.message}</p>
                            <p className='my-3'>Forget password ?<Button onClick={handleResetPass} className='text-decoration-none' variant="link">Reset password.</Button> </p>
                            <Button className='d-block w-75 mx-auto' variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p className='my-4'>New to Genius Car ? <Link to='/signup' className='text-warning text-decoration-none'>Signup</Link></p>
                        <SocialLogin></SocialLogin>
                        <ToastContainer></ToastContainer>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Login;