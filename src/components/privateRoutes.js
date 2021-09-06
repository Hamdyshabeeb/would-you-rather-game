import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

function PrivateRoutes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
		</Switch>
	);
}

export default PrivateRoutes;
