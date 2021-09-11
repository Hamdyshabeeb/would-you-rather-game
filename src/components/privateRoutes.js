import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Leaderboard from './Leaderboard';
import NotFound404 from './NotFound404';
import NewQuestion from './NewQuestion';
import QuestionDetails from './QuestionDetails';

function PrivateRoutes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/leaderboard" component={Leaderboard} />
			<Route path="/add" component={NewQuestion} />
			<Route path="/questions/:id" component={QuestionDetails} />
			<Route component={NotFound404} />
		</Switch>
	);
}

export default PrivateRoutes;
