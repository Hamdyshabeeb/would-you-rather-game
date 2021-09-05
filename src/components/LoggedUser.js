import React from 'react';
import { connect } from 'react-redux';

function LoggedUser(props) {
	const { name, avatarURL } = props.LoggedUser;
	return (
		<div className="d-inline-flex  align-items-center me-3">
			<div className="flex-fill me-2">{name}</div>
			<div className="flex-fill" style={{ width: '50px' }}>
				<img className="img-fluid  rounded-circle" src={avatarURL} alt={name} />
			</div>
		</div>
	);
}

function mapStateToProps({ authenUser, users }) {
	return {
		LoggedUser: users[authenUser],
	};
}
export default connect(mapStateToProps)(LoggedUser);
