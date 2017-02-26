import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
/* CSS */
import '../css/main.css'
/* COMPONENTS */
import LoginForm from './forms/LoginForm.js'
import RegisterForm from './forms/RegisterForm.js'

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="wrapper-header">
                    <Container>
                        <h1 className="title">ArqSoft-Muro</h1>
                        <LoginForm/>
                    </Container>
                </div>
                <div className="wrapper-body">
                    <Container>
                        <Row>
                            <Col md="6">Imagen</Col>
                            <Col md="6"><RegisterForm/></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}