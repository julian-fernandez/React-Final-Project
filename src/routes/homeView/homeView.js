import './homeView.css';
import React, { Component } from 'react';
import SearchForm from './components/input';

class HomeView extends Component {

	render() {
		return (
			<article id="homeArticle">
			<h4>Welcome to</h4>
			<h1 id="spotySearchTitle">Spotisearch</h1>
			<SearchForm/>
			</article>
			);
		}

	}

	export default HomeView;
