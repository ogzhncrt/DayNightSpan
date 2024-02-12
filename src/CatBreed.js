//import { useState,useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';

export const CatBreed = (props) => {
    return (
        
                <Col xs="4" lg="3">
                    <Card className="text-center mb-4">
                    <Card.Header>{props.breedData.breed}</Card.Header>
                    <Card.Body>
                    <Card.Title>{props.breedData.country}</Card.Title>
                    <Card.Text>
                    <h5>Coat: {props.breedData.coat}</h5>
                    <h5>Origin: {props.breedData.origin}</h5>
                    <h5>Pattern: {props.breedData.pattern}</h5>

                    
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>
    )
}