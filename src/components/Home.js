import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	state = {};
	render() {
		console.log(this.props);
		return (
			<div className="container">
				<h2>Home Page</h2>
			</div>
		);
	}
}
function mapStateToProps({ questions }) {
	return {
		questions,
	};
}

export default connect(mapStateToProps)(Home);
