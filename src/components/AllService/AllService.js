import './AllService.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllService = (props) => {
    const { title, price, img } = props.allService ;
    return (
        <Col>
            <Card className="card">
                <Card.Img className="card-img" variant="top" src={img} />
                <Card.Body className="text-center">
                    <Card.Title className="card-title">{title} </Card.Title>
                    <Card.Text>
                        <p className="card-text">Price: $ {price}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllService;