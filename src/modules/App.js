import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router'
/* CSS */
import '../assets/css/main.css'
/* COMPONENTS */
import LoginForm from '../components/forms/LoginForm.js'
import RegisterForm from '../components/forms/RegisterForm.js'

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
                            <Col md="6 image"><img src={require('../assets/images/svg/UN.svg')} alt="UN" className="img-responsive logo"/></Col>
                            <Col md="6"><RegisterForm/></Col>
                        </Row>
                    </Container>
                </div>
                <ul>
                    <li><Link to="/Main">Main</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                </ul>
            </div>
        );
    }
}