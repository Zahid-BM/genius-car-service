import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'https://fierce-fortress-36985.herokuapp.com/service';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
       
        reset();
    };
    return (
        <>
            <Container className='my-5'>
                <h2 className='text-center fw-bolder text-primary mb-5'>Please input to Add a new Service</h2>
                <form className='w-25 mx-auto d-flex flex-column shadow px-4 py-5 rounded-3' onSubmit={handleSubmit(onSubmit)}>
                    <input className='text-center my-2' placeholder='Service Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='text-center my-2' placeholder='description' {...register("description")} />
                    <input className='text-center my-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='text-center my-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='text-center mt-4 w-50 mx-auto bg-primary border-0 rounded-3 py-2 text-white' type="Submit" />
                </form>
            </Container>
        </>
    );
};

export default AddService;