import './Services.css';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllService from '../AllService/AllService';

const Services = () => {
    const [allServices , setAllSerices] = useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setAllSerices(data))
    },[])
    return (
        <Container>
            <div className="text-center mt-3">
                <h1 className="title">Learning Hub</h1>
                <p>Where you can learn with fun and enjoy</p>
                <h2>Our Services</h2>
            </div>
            <Row xs={1} md={3} className="g-4 mt-3">
                {
                    allServices.map(allService => <AllService
                        key={allService.id}
                        allService={allService}
                    ></AllService>)
                }
            </Row>
        </Container>
        
    );
};

export default Services;