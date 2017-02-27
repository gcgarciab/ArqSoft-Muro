import React, { Component } from 'react'
import $ from 'jquery'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { NotificationContainer, NotificationManager } from 'react-notifications'

export default class RegisterForm extends Component{
	constructor(props) {
    	super(props);
    	this.state = {
    		name: '',
    		username: '',
    		email: '',
    		password: ''
    	};
    	this.handleInputChange = this.handleInputChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleInputChange(event) {
  		const target = event.target;
  		const name = target.name;
  		const value = target.value;

    	this.setState({[name]: value});
  	}

   	handleSubmit(event) {
  		var data = {
  			name: this.state.name,
  			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		}
		console.log(data)
  		$.ajax({
	        type: 'POST',
	        url: 'https://reqres.in/api/register',
	        data: data
	    })
      	.done(function(response) {
      		/*Show Token*/
        	console.log(response)
        	/* Notify Success registration */
        	NotificationManager.success('Success registration', 'Congrats!');
      	})
      	.fail(function() {
      		NotificationManager.success('Error registration', 'Fail!');
      	});
    	event.preventDefault();
  	}

  	render() {
		return (
			<div className="register">
				<h2 className="registerTitle">Regístrate</h2>
				<Form className="registerForm clearfix" onSubmit={this.handleSubmit}>
					<FormGroup className="registerInput">
						<Label for="name">Nombre</Label>
						<Input type="text" value={this.state.value} onChange={this.handleInputChange} name="name" id="name" placeholder="Name" />
					</FormGroup>
					<FormGroup className="registerInput">
						<Label for="email">Nombre de usuario</Label>
						<Input type="text" value={this.state.value} onChange={this.handleInputChange} name="username" id="username" placeholder="Username" />
					</FormGroup>
					<FormGroup className="registerInput">
						<Label for="exampleEmail">Correo electrónico</Label>
						<Input type="text" value={this.state.value} onChange={this.handleInputChange} name="email" id="email" placeholder="Email" />
					</FormGroup>
					<FormGroup className="registerInput">
						<Label for="examplePassword">Contraseña</Label>
						<Input type="password" value={this.state.value} onChange={this.handleInputChange} name="password" id="password" placeholder="Password" />
					</FormGroup>
					<Button className="registerSubmit" color="success">Crear usuario</Button>
				</Form>
				<NotificationContainer/>
			</div>
		);
	}
}