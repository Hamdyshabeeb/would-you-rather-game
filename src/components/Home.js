import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';

class Home extends Component {
	state = { questionsView: 'unanswered' };
	onClick = (e) => {
		e.preventDefault();

		this.state.questionsView !== e.target.id &&
			this.setState({ questionsView: e.target.id });
	};
	render() {
		const qv = this.state.questionsView;
		const { unanswered, answered } = this.props;
		return (
			<div className="container">
				<ul className="nav nav-tabs" style={{ maxWidth: '540px' }}>
					<li className="nav-item">
						<a
							className={qv === 'unanswered' ? 'nav-link active' : 'nav-link'}
							href="#unanswered"
							onClick={this.onClick}
							id="unanswered"
						>
							Unanswered Questions
						</a>
					</li>
					<li className="nav-item">
						<a
							className={qv === 'answered' ? 'nav-link active' : 'nav-link'}
							onClick={this.onClick}
							id="answered"
							href="#answered"
						>
							answered Questions
						</a>
					</li>
				</ul>
				{qv === 'unanswered' ? (
					<QuestionList questions={unanswered} />
				) : (
					<QuestionList questions={answered} />
				)}{' '}
			</div>
		);
	}
}
function mapStateToProps({ questions, authenUser, users }) {
	const answered = Object.keys(questions)
		.filter((id) => users[authenUser]['answers'].hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const unanswered = Object.keys(questions)
		.filter((id) => !users[authenUser]['answers'].hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
	return {
		answered,
		unanswered,
	};
}

export default connect(mapStateToProps)(Home);
