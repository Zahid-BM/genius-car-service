import React from 'react';
import { Carousel} from 'react-bootstrap';

const Banner = () => {
    return (
        <>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/crhFHgW/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-3'>First slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/37yP0hV/banner2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fs-3'>Second slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/QpWG5g9/banner3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fs-3'>Third slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
            
      
    );
};

export default Banner;