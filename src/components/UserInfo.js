import React from 'react';

function UserInfo(props) {
	const { name, avatarURL, score } = props.user;
	const questionsLength = props.user.questions.length;
	const answersLenght = Object.keys(props.user.answers).length;
	return (
		<li className="card mb-3">
			<div className="card-header">{name}</div>
			<div className="row g-0">
				<div className="col-md-2">
					<img
						src={avatarURL}
						class="img-fluid rounded-rounded-circle"
						alt={name}
					/>
				</div>
				<div className="card-body col-md-10 row">
					<div className="col-md-8">
						<p className="d-flex justify-content-between">
							<span>Questions Answered</span> <span>{answersLenght}</span>
						</p>
						<p className="d-flex justify-content-between">
							<span>Questions Created</span> <span>{questionsLength}</span>
						</p>
					</div>
					<div className="col-md-4 d-flex align-items-center justify-content-center">
						<p className="d-flex flex-column">
							<span>Score</span> <span>{score}</span>{' '}
						</p>
					</div>
				</div>
			</div>
		</li>
	);
}

export default UserInfo;
