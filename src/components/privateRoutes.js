import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound404 from './NotFound404';

function PrivateRoutes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route component={NotFound404} />
		</Switch>
	);
}

export default PrivateRoutes;
