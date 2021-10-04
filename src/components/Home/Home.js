import './Home.css';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
    const [services , setServices] = useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <Container>
            <div className="text-center mt-3">
                <h1 className="title">Learning Hub</h1>
                <p>Where you can learn with fun and enjoy</p>
                <h2>Our Coureses</h2>
            </div>
            <Row xs={1} md={2} className="g-4 mt-3">
                {
                    services.slice(0,4).map(service => <Service
                    key = { service.id}
                    service = {service}

                    ></Service>)
                }
            </Row>
            <div className="mt-5">
                <h1 className="text-center">Event And Workshop</h1>
                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Workshop on Oil panting</td>
                            <td>3: 30 pm</td>
                            <td>7/10/21</td>
                        </tr>
                        <tr>
                            <td>Junior Art competition</td>
                            <td>10:00 am</td>
                            <td>9/10/21</td>
                        </tr>
                        <tr>
                            <td>Workshop on learn English</td>
                            <td>10:00 am</td>
                            <td>10/10/21</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            
        </Container>
    );
};

export default Home;