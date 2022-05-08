import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Kamal', img: 'https://i.ibb.co/cwHrz7W/expert-6.png' },
        { id: 2, name: 'Kashem', img: 'https://i.ibb.co/8mRLf41/expert-5.jpg' },
        { id: 3, name: 'Khaibar', img: 'https://i.ibb.co/vw1Mpvx/expert-4.jpg' },
        { id: 4, name: 'KaKamrul', img: 'https://i.ibb.co/W6ZJRb3/expert-3.jpg' },
        { id: 5, name: 'Habib', img: 'https://i.ibb.co/ZzywPb0/expert-1.jpg' },
        { id: 6, name: 'Zabeer', img: 'https://i.ibb.co/NNWN10Y/expert-2.jpg' }
    ];
    return (
        <>
            <Container className='my-5' id='experts' >
                <h1 className='text-center text-primary' >Our Experts</h1>
                <Row>
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Experts;