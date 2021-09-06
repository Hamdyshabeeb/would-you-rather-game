import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {
	state = {};
	render() {
		const { questions } = this.props;
		return (
			<ul className="ps-0 mx-auto" style={{ maxWidth: '540px' }}>
				{questions.length > 0 &&
					questions.map((question) => (
						<Question key={question} id={question} />
					))}
			</ul>
		);
	}
}

export default QuestionList;
