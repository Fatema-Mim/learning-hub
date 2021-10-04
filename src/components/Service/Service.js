import './Service.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {id, title,price,img} = props.service
    return (
        <Col>
            <Card className="card">
                <Card.Img className="card-img-2" variant="top" src={img} />
                <Card.Body className="text-center">
                    <Card.Title className="card-title">{title} </Card.Title>
                    <Card.Text className="card-text">
                        <p>Price: $ {price}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;