import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {
	state = {};
	render() {
		const { question, id } = this.props;
		const { avatarURL, name } = this.props.users[question.author];

		return (
			<li className="card mb-3">
				<div className="card-header">{name}</div>
				<div className="row" style={{ textAlign: 'left' }}>
					<div className="col-md-4 d-flex align-items-center ">
						<img
							src={avatarURL}
							className="img-fluid rounded-circle img-thumbnail center"
							alt={name}
						/>
					</div>

					<div className="card-body col-md-8">
						<h5 className="card-title">Would You Rather</h5>
						<p className="card-text">{question.optionOne.text}</p>
						<Link to={`/questions/:${id}`} className="btn btn-primary">
							View Poll
						</Link>
					</div>
				</div>
			</li>
		);
	}
}
function mapStateToProps({ questions, users }, { id }) {
	return {
		question: questions[id],
		users,
	};
}
export default connect(mapStateToProps)(Question);
