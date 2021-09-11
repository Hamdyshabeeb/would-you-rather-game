import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handelSaveQuestionAnswer } from '../actions/shared';

class UnAnsweredQuestion extends Component {
	state = { value: '' };
	onChange = (e) => {
		e.target.value && this.setState({ value: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		const { dispatch, question, authedUser, qid } = this.props;
		const answerText = this.state.value;
		const answer =
			question.optionOne.text === answerText ? 'optionOne' : 'optionTwo';
		dispatch(handelSaveQuestionAnswer({ authedUser, qid, answer }));
		console.log(qid);
	};
	render() {
		const { name, avatarURL } = this.props.author;
		const { id, question } = this.props;
		return (
			<div className="container">
				<div
					className="card mx-auto"
					style={{ textAlign: 'left', maxWidth: '500px' }}
				>
					<div className="card-header">{name} Asks:</div>
					<div className="row">
						<div className="col-md-4  d-flex align-items-center ">
							<img
								src={avatarURL}
								className="img-fluid rounded-circle img-thumbnail center"
								alt={name}
							/>
						</div>

						<div className="card-body col-md-8">
							<form onSubmit={this.onSubmit}>
								<h5 className="card-title">Would You Rather</h5>
								<div onChange={this.onChange}>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name={id}
											id="optionOne"
											value={question.optionOne.text}
										/>
										<label className="form-check-label" htmlFor="optionOne">
											{question.optionOne.text}
										</label>
									</div>

									<div className="form-check mb-3">
										<input
											className="form-check-input"
											type="radio"
											name={id}
											id="optionTwo"
											value={question.optionTwo.text}
										/>
										<label className="form-check-label" htmlFor="optionTwo">
											{question.optionTwo.text}
										</label>
									</div>
								</div>
								<button
									className="btn btn-primary w-75"
									disabled={!this.state.value}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps({ users, authenUser, questions }, { id }) {
	return {
		question: questions[id],
		author: users[questions[id].author],
		authedUser: authenUser,
		qid: id,
	};
}
export default connect(mapStateToProps)(UnAnsweredQuestion);
