import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App'
import AddAuthorForm from './components/AddAuthorForm'
import "./index.css";

function render() {
	ReactDOM.render(
		<BrowserRouter>
			<React.Fragment>
				<Route exact path="/" component={App} />
				<Route path="/add" component={AddAuthorForm} />
			</React.Fragment>
		</BrowserRouter>,

		document.getElementById("root"));
}

render();
