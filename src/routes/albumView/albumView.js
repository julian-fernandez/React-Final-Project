import './albumView.css';
import React, { Component } from 'react';
import TrackList from './components/TrackList';

class AlbumView extends Component {
	render() {
		return (
			<article className="home-view">
			<img className="band-image" src="http://www.placehold.it/200x200"/>
			<div className="band-info">
			<h1>Blues for the Red Sun</h1>
			<h2>Kyuss - 1994</h2>
			</div>
			<br/>
			<span> Home > Artists > Kyuss > Blues for the Red Sun </span>
			<hr/>
			< TrackList/>

			</article>

			);
	}
}

export default AlbumView;


