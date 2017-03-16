import './artistsView.css';
import React, { Component } from 'react';
import ArtistBox from './components/ArtistBox';


class ArtistsView extends Component {
	render() {
		return (
			<article className="home-view">
			<h4>Search results</h4>
			<h1>You searched for: <strong>Kyuss</strong></h1>
			<br/>
			<span> Home > Artists </span>
			<hr/>
			<ArtistBox/>
			<ArtistBox/>
			<ArtistBox/>
			<ArtistBox/>
			</article>

			);
	}
}

export default ArtistsView;
