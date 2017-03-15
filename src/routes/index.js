import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import AboutView from './aboutView/aboutView';
import ArtistsView from './artistsView/artistsView';
import BandView from './bandView/bandView';
import AlbumView from './albumView/albumView';

const getRoutes = function() {
	return (
		<div>
		<Route name="Main" component={MainView} />
		<Switch>
		<Route exact path="/" component={HomeView} />
		<Route path="/about" component={AboutView} />
		<Route path="/artists" component={ArtistsView} />
		<Route path="/kyuss" component={BandView} />
		<Route path="/bluesfortheredsun" component={AlbumView} />
		</Switch>
		</div>
		)
};

export default getRoutes;
