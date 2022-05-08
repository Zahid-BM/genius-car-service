import React from 'react';



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-primary'>
            <footer className=''>
                <p className='text-white text-center py-5 '>All Right Reserved 	&copy; {year} </p>
            </footer>
        </div>
    );
};

export default Footer;