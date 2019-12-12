import React from 'react';
import {routes} from './routing';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';

const {main, pokemon} = routes;

export const App = (
	<Router>
		<div>
			<Route exact path={main.link} component={main.component}/>
			<Route path={pokemon.link} component={pokemon.component}/>
		</div>
	</Router>
);
