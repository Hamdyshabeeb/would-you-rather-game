import React from 'react';
import { connect } from 'react-redux';

function AnsweredQuestion(props) {
	const { avatarURL, name } = props.author;
	const { optionOne, optionTwo } = props.question;
	const userOption = props.user.answers[props.id];
	const optionOnePercentage =
		(optionOne.votes.length * 100) /
		(optionOne.votes.length + optionTwo.votes.length);
	const optionTwoPercentage =
		(optionTwo.votes.length * 100) /
		(optionOne.votes.length + optionTwo.votes.length);
	return (
		<div className="container">
			<div className="card mb-3 mx-auto " style={{ maxWidth: '540px' }}>
				<div class="card-header">Asked By {name}</div>
				<div className="row g-0">
					<div className="col-md-4 d-flex align-items-center justify-content-center">
						<img
							src={avatarURL}
							className="img-fluid rounded-circle img-thumbnail"
							alt={name}
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title mb-2">Results</h5>
							<p
								className={`card-text p-3 me-3 position-relative ${
									userOption === 'optionOne' ? 'bg-light' : ''
								}`}
							>
								Would You Rather {optionOne.text}?
								<div class="progress my-2">
									<div
										class="progress-bar"
										role="progressbar"
										style={{ width: `${optionOnePercentage}%` }}
										aria-valuenow={optionOnePercentage}
										aria-valuemin="0"
										aria-valuemax="100"
									>
										{Math.round(optionOnePercentage)}%
									</div>
								</div>
								<div>
									{optionOne.votes.length} Out Of{' '}
									{optionTwo.votes.length + optionOne.votes.length} Votes
								</div>
								{userOption === 'optionOne' && (
									<span class="position-absolute top-0  translate-middle badge rounded-pills bg-success start-100">
										Your's
										<span class="visually-hidden">unread messages</span>
									</span>
								)}
							</p>
							<p
								className={`card-text p-3 me-3  position-relative ${
									userOption === 'optionTwo' ? 'bg-light' : ''
								}`}
							>
								Would You Rather {optionTwo.text}?
								<div class="progress my-2">
									<div
										class="progress-bar"
										role="progressbar"
										style={{
											width: `${optionTwoPercentage}%`,
										}}
										aria-valuenow={optionTwoPercentage}
										aria-valuemin="0"
										aria-valuemax="100"
									>
										{Math.round(optionTwoPercentage)}%
									</div>
								</div>
								<div>
									{optionTwo.votes.length} Out Of{' '}
									{optionTwo.votes.length + optionOne.votes.length} Votes
								</div>
								{userOption === 'optionTwo' && (
									<span class="position-absolute top-0 translate-middle badge rounded-pills bg-success start-100">
										Your's
										<span class="visually-hidden">unread messages</span>
									</span>
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
function mapStateToProps({ questions, authenUser, users }, { id }) {
	return {
		question: questions[id],
		user: users[authenUser],
		author: users[questions[id].author],
	};
}
export default connect(mapStateToProps)(AnsweredQuestion);
