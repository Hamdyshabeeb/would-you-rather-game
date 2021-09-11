export const RECIEVE_USERS = 'RECIEVE_USERS';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const ADD_ANSWERED_QUESTION_TO_USER = 'ADD_ANSWERED_QUESTION_TO_USER';

export function recieveUsers(users) {
	return {
		type: RECIEVE_USERS,
		users,
	};
}

export function addQuestionToUser(question) {
	return {
		type: ADD_QUESTION_TO_USER,
		question,
	};
}
export function addAnswerdQuestionToUser(info) {
	return {
		type: ADD_ANSWERED_QUESTION_TO_USER,
		info,
	};
}
