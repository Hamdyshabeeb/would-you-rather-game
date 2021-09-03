import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import handelIntialData from '../actions/shared';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handelIntialData());
	}
	render() {
		return (
			<div className="App">
				<Navbar />
				<Home />
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
