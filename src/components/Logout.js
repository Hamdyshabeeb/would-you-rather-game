import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unSetUthenUser } from '../actions/authenUser';

class Logout extends Component {
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

export default connect()(Logout);
