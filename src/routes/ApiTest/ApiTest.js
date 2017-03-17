import './ApiTest.css';
import React, { Component } from 'react';
import SearchForm from './components/input';

class ApiTest extends Component {


	render() {
		var test = localStorage.getItem( 'searchinput' );
		console.log(test);
		return (
			<article className="home-view">
			<h4>Welcome to</h4>
			<h1>APITEST</h1>
			< SearchForm/>
			</article>

			);
	}
}

export default ApiTest;
