import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import handelIntialData from '../actions/shared';
import Login from './Login';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handelIntialData());
	}
	render() {
		console.log(this.props.authenUser);
		return (
			<div className="App">
				<Login />
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
