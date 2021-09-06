import React from 'react';

function UserInfo(props) {
	const { name, avatarURL, score } = props.user;
	const questionsLength = props.user.questions.length;
	const answersLenght = Object.keys(props.user.answers).length;
	return (
		<li className="card mb-3">
			<div className="card-header">{name}</div>
			<div className="row g-0">
				<div className="col-md-3 px-3 d-flex align-items-center">
					<img
						src={avatarURL}
						className="img-fluid rounded-circle img-thumbnail"
						alt={name}
					/>
				</div>
				<div className="card-body col-md-9 row">
					<div className="col-md-8 d-flex flex-column align-items-center justify-content-center">
						<p className="d-flex w-100 mb-0 justify-content-between">
							<span>Questions Answered</span> <span>{answersLenght}</span>
						</p>
						<p className="d-flex mb-0 w-100 justify-content-between">
							<span>Questions Created</span> <span>{questionsLength}</span>
						</p>
					</div>
					<div className="col-md-4 d-flex align-items-center justify-content-center">
						<p className="d-flex flex-column align-items-center justify-content-between mb-0 bg-light p-3 rounded-circle">
							<span>Score</span> <span>{score}</span>{' '}
						</p>
					</div>
				</div>
			</div>
		</li>
	);
}

export default UserInfo;
