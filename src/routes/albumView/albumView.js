import './albumView.css';
import React, { Component } from 'react';
import AlbumBox from './components/AlbumBox';

class AlbumView extends Component {
	render() {
		return (
			<article className="home-view">
			<h1>KYUSS</h1>
			<br/>
			<span> Home > Artists > Kyuss > Blues for the Red Sun </span>
			<hr/>
			< AlbumBox/>

			</article>

			);
	}
}

export default AlbumView;
