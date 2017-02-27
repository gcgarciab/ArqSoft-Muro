import React, { Component } from 'react';
import $ from 'jquery'; 
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { browserHistory } from 'react-router';


export default class LoginForm extends Component{
	constructor(props) {
    	super(props);
    	this.state = {
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
			email: this.state.email,
			password: this.state.password
		}

    	$.ajax({
	        type: 'POST',
	        url: 'https://reqres.in/api/login',
	        data: data
	    })
      	.done(function(response) {
      		/*Print Token*/
        	console.log(response)
        	/* Redirect to Main view */
        	browserHistory.push('/Main');
      	})
      	.fail(function() {
        	console.log('failed to login');
      	});

    	event.preventDefault();
  	}

	render() {
		return (
			<div className="login">
				<Form className="loginForm clearfix" onSubmit={this.handleSubmit}>
					<FormGroup className="loginInput">
						<Label for="exampleEmail">Correo electrónico</Label>
						<Input type="text" value={this.state.value} onChange={this.handleInputChange} name="email" id="email" placeholder="Email" />
					</FormGroup>
					<FormGroup className="loginInput">
						<Label for="examplePassword">Contraseña</Label>
						<Input type="password" value={this.state.value} onChange={this.handleInputChange} name="password" id="password" placeholder="Password" />
					</FormGroup>
					<Button className="loginSubmit">Iniciar sesión</Button>
				</Form>
			</div>
		);
	}
}