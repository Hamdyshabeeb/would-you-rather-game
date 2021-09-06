import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Leaderboard from './Leaderboard';
import NotFound404 from './NotFound404';

function PrivateRoutes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/leaderboard" component={Leaderboard} />
			<Route component={NotFound404} />
		</Switch>
	);
}

export default PrivateRoutes;
