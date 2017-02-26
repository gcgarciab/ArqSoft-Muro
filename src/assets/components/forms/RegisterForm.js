import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RegisterForm extends Component{
	render() {
		return (
			<div className="register">
				<h2 className="registerTitle">Regístrate</h2>
				<Form className="registerForm clearfix">
					<FormGroup className="registerInput">
						<Label for="exampleEmail">Nombre</Label>
						<Input type="name" name="name" id="userName" placeholder="Name" />
					</FormGroup>
					<FormGroup className="registerInput">
						<Label for="exampleEmail">Correo electrónico</Label>
						<Input type="email" name="email" id="userEmail" placeholder="Email" />
					</FormGroup>
					<FormGroup className="registerInput">
						<Label for="examplePassword">Contraseña</Label>
						<Input type="password" name="password" id="userPassword" placeholder="Password" />
					</FormGroup>
					<Button className="registerSubmit">Crear cuenta</Button>
				</Form>
			</div>
		);
	}
}