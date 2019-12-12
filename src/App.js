import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './routing';

const { main, pokemon } = routes;

export const App = (
	<Router>
		<div>
			<Route exact path={main.link} component={main.component} />
			<Route path={pokemon.link} component={pokemon.component} />
		</div>
	</Router>
);
