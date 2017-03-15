import './ApiTest.css';
import React, { Component } from 'react';

class WeatherApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	_getWeatherInfo = (city) => {
		const main = this;
		let query = null;
		main.setState({
			infoStatus: 'loading'
		});

		fetch(`https://api.spotify.com/v1/search?type=artist&q=artist:${query}`)
		.then( function(response) {
			return response;
			console.log(response)
		})
		.then( function(response) {
			setTimeout( function() {
				main.setState({
					infoStatus: 'loaded'
				});
			}, 300);
			return response.json();
		})
		.then( function(data) {
			main.setState({
				name: data.name,
			});
		})
		.catch( function() {
			main.setState({
				infoStatus: 'error'
			});
		})
	};
	componentWillMount() {
		this._getWeatherInfo();
	};
	_handleSubmit = (event) => {
		event.preventDefault();
		this._getWeatherInfo(event.target.search.value);
	};
	render() {
		const { 
			city, 
			country,
			temperature, 
			humidity, 
			wind, 
			infoStatus 
		} = this.state;
		let data = null;
		if (infoStatus == 'loaded') {
			data = <div className="weatherInfo">
			<div className="cityName">
			<div>{name}</div>
			</div>
			
			</div>
		} else if (infoStatus == 'loading') {
			data = <div className="info loading">Loading weather data...</div>
		} else if (infoStatus == 'error') {
			data = <div className="info error">Error while loading weather data. Try again later.</div>
		}
		return (
			<div className="weatherApp">
			<div className="weatherQuery">
			<form onSubmit={this.handleSubmit}>
			<label>
			Name:
			<input type="text" ref={(input) => this.input = input} />
			</label>
			<input type="submit" value="Submit" />
			</form>
			
			</div>
			{data}
			</div>
			);
	};
}

export default WeatherApp;