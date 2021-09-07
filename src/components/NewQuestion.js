import React, { Component } from 'react';

import { connect } from 'react-redux';
import { saveNewQuestion } from '../actions/shared';

class NewQuestion extends Component {
	onSubmit = (e) => {
		e.preventDefault();
		const optionOneText = this.option1.value;
		const optionTwoText = this.option2.value;
		const { author, dispatch } = this.props;
		dispatch(saveNewQuestion({ optionOneText, optionTwoText, author }));
		this.props.history.push('/');
	};
	render() {
		return (
			<div className="container">
				<h2>Create New Question</h2>
				<form
					onSubmit={this.onSubmit}
					className="p-4 mx-auto bg-light shadow-sm mt-4 rounded-3"
					style={{ maxWidth: '500px', border: '2px solid #ccc' }}
				>
					<h3 style={{ fontSize: '1.2rem' }}> Would You Rathor</h3>
					<input
						required
						type="text"
						className="form-control mt-3"
						placeholder="Enter Option One"
						ref={(ele) => (this.option1 = ele)}
					/>

					<input
						required
						type="text"
						className="form-control mt-3"
						placeholder="Enter Option Two"
						ref={(ele) => (this.option2 = ele)}
					/>

					<button type="submit" className="btn btn-primary mt-4">
						Submit
					</button>
				</form>
			</div>
		);
	}
}
function mapStateToprops({ authenUser }) {
	return {
		author: authenUser,
	};
}
export default connect(mapStateToprops)(NewQuestion);
