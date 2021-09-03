import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUthenUser } from '../actions/authenUser';
class Login extends Component {
	onSubmit = (e) => {
		e.preventDefault();
		const loggedUser = this.loggedUser.value;
		if (loggedUser !== '') {
			return this.props.dispatch(setUthenUser(loggedUser));
		}
	};
	render() {
		const { users } = this.props;
		return (
			<div className="container">
				<h3>Please Log In</h3>
				<form onSubmit={this.onSubmit}>
					<select
						className="form-select"
						ref={(ele) => (this.loggedUser = ele)}
					>
						<option defaultChecked value="">
							Please Choose User
						</option>
						{Object.keys(users).map((id) => (
							<option key={id} value={id}>
								{users[id].name}
							</option>
						))}
					</select>
					<button className="btn btn-primary">SUBMIT</button>
				</form>
			</div>
		);
	}
}
function mapStateToProps({ users }) {
	return {
		users,
	};
}
export default connect(mapStateToProps)(Login);
