import './homeView.css';
import React, { Component } from 'react';
import SearchForm from './components/input';

class HomeView extends Component {
	render() {
		return (
			<article className="home-view">
			<h4>Search results</h4>
			<h1>Artists</h1>
			</article>

			);
	}
}

export default HomeView;
