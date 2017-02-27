import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
/* MODULES */
import App from './modules/App'
import Main from './modules/Main'
import Profile from './modules/Profile'
/* BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
    	{/* add the routes here */}
    	<Route path="/main" component={Main}/>
    	<Route path="/profile" component={Profile}/>
	</Router>,
	document.getElementById('root')
);
