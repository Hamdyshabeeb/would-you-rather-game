export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function recieveQuestions(questions) {
	return {
		type: RECIEVE_QUESTIONS,
		questions,
	};
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

export function addQuestionAnswer(info) {
	return {
		type: ADD_QUESTION_ANSWER,
		info,
	};
}
