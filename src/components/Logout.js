import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unSetUthenUser } from '../actions/authenUser';

class Logout extends React.Component {
	onClick = () => {
		this.props.dispatch(unSetUthenUser());
	};
	render() {
		return (
			<div>
				<button className="btn btn-warning" onClick={this.onClick}>
					Logout
				</button>
			</div>
		);
	}
}
function mapStateToProps() {
	return {};
}

export default connect()(Logout);
