import { _getUsers, _getQuestions, _saveQuestion } from './_DATA';

export function getIntialData() {
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => ({
			users,
			questions,
		})
	);
}

export function saveQuestion(questionDetails) {
	return _saveQuestion(questionDetails);
}
