import React from 'react';
import AnsweredQuestion from './AnswerdQuestion';
import UnAnsweredQuestion from './unAnsweredQuestion';
import { connect } from 'react-redux';

function QuestionDetails({ id, isAnswered }) {
	return (
		<div className="container">
			{isAnswered ? (
				<AnsweredQuestion id={id} />
			) : (
				<UnAnsweredQuestion id={id} />
			)}
		</div>
	);
}

function mapStateToProps({ users, authenUser }, props) {
	let id = props.match.params.id;
	id = id[0] === ':' ? id.slice(1) : id;
	return {
		id: id,
		isAnswered: users[authenUser].answers.hasOwnProperty(id),
	};
}

export default connect(mapStateToProps)(QuestionDetails);
