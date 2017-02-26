import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginForm extends Component{
	render() {
		return (
			<div className="login">
				<Form className="loginForm clearfix">
					<FormGroup className="loginInput">
						<Label for="exampleEmail">Correo electrónico</Label>
						<Input type="email" name="email" id="userEmail" placeholder="Email" />
					</FormGroup>
					<FormGroup className="loginInput">
						<Label for="examplePassword">Contraseña</Label>
						<Input type="password" name="password" id="userPassword" placeholder="Password" />
					</FormGroup>
					<Button className="loginSubmit">Iniciar sesión</Button>
				</Form>
			</div>
		);
	}
}