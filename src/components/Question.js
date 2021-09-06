import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
	state = {};
	render() {
		const { question } = this.props;
		const { avatarURL, name } = this.props.users[question.author];

		return (
			<li className="card mb-3">
				<div className="card-header">{name}</div>
				<div className="row" style={{ textAlign: 'left' }}>
					<div className="col-md-3 d-flex align-items-center ">
						<img
							src={avatarURL}
							className="img-fluid rounded-circle img-thumbnail center"
							alt={name}
						/>
					</div>

					<div className="card-body col-md-8">
						<h5 className="card-title">Would You Rather</h5>
						<p className="card-text">{question.optionOne.text}</p>
						<a href="#" className="btn btn-primary">
							View Poll
						</a>
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
