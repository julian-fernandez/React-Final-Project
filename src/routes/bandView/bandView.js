import './bandView.css';
import React, { Component } from 'react';
import BandBox from './components/BandBox';


class BandView extends Component {
	render() {
		return (
			<article className="home-view">
			<img className="band-image" src="http://www.placehold.it/200x200"/>
			<div className="band-info">
			<h1>KYUSS</h1>
			<p>Stoner rock, desert rock, doom metal</p>
			</div>
			<br/>
			<span> Home > Artists > Kyuss </span>
			<hr/>
			< BandBox/>
			< BandBox/>
			< BandBox/>
			< BandBox/>
			</article>

			);
	}
}

export default BandView;
