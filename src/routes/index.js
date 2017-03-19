import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import AboutView from './aboutView/aboutView';
import ArtistsView from './artistsView/artistsView';
import BandView from './bandView/bandView';
import AlbumView from './albumView/albumView';
import ApiTest from './ApiTest/ApiTest';

const getRoutes = function() {
	return (
		<div>
		<Route name="Main" component={MainView} />
		<Switch>
		<Route exact path="/" component={HomeView} />
		<Route path="/about" component={AboutView} />
		<Route path="/artists" component={ArtistsView} />
		<Route path="/bandview" component={BandView} />
		<Route path="/albumview" component={AlbumView} />
		<Route path="/apitest" component={ApiTest} />
		</Switch>
		</div>
		)
};

export default getRoutes;
