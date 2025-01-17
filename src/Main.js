import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


//import 'bootstrap/dist/css/bootstrap.css'; 
//only needed at top level

import './Main.css';

export default class Main extends Component{
    
    render(){
        return (
            <main>
                <Container className="container">
                    <Row>
                      <Col>.col</Col>
                    </Row>
                    <Row>
                      <Col>.col</Col>
                      <Col>.col</Col>
                      <Col>.col</Col>
                      <Col>.col</Col>
                    </Row>
                    <Row>
                      <Col xs="3">.col-3</Col>
                      <Col xs="6">
                        <Button color="danger">Button in the Middle</Button>
                      </Col>
                      <Col xs="3">.col-3</Col>
                    </Row>
                    <Row>
                      <Col xs="6">.col-6</Col>
                      <Col xs="6">.col-6</Col>
                    </Row>
                </Container>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Brayan Contreras Jaramillo </CardTitle>
                    <CardSubtitle>8987547</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
                </Card>
            </main>
        )
    }
}