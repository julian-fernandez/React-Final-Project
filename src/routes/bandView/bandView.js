import './bandView.css';
import React, { Component } from 'react';
import BandBox from './components/BandBox';


class BandView extends Component {
	render() {
		var test = localStorage.getItem( 'bandid' );
		console.log("BANDA BANDA " + test);
		return (
			<article className="home-view">
			<BandBox/>
			</article>

			);
	}
}

export default BandView;
