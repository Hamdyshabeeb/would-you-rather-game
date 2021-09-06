import React from 'react';

import { connect } from 'react-redux';
import UserInfo from './UserInfo';

function Leaderboard(props) {
	const { users } = props;
	return (
		<div className="container">
			<ul className="ps-0 mx-auto" style={{ maxWidth: '500px' }}>
				{users.map((user) => (
					<UserInfo key={user.id} user={user} />
				))}
			</ul>
		</div>
	);
}

function mapStateToProps({ users }) {
	return {
		users: Object.keys(users)
			.map((id) => ({
				...users[id],
				score:
					Object.keys(users[id].answers).length + users[id].questions.length,
			}))
			.sort((a, b) => b.score - a.score),
	};
}
export default connect(mapStateToProps)(Leaderboard);
