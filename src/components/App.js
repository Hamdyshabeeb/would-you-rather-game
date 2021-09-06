import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '../App.css';
import handelIntialData from '../actions/shared';
import Login from './Login';
import Navbar from './Navbar';
import PrivateRoutes from './privateRoutes';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handelIntialData());
	}
	render() {
		const { authenUser } = this.props;
		return (
			<div className="App">
				<BrowserRouter>
					<Navbar />
					{(authenUser && <PrivateRoutes />) || <Login />}
				</BrowserRouter>
			</div>
		);
	}
}

function mapStateToProps({ authenUser }) {
	return {
		authenUser,
	};
}

export default connect(mapStateToProps)(App);
