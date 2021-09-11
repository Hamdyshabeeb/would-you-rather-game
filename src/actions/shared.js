import {
	addQuestionToUser,
	recieveUsers,
	addAnswerdQuestionToUser,
} from './users';
import { unSetUthenUser } from './authenUser';
import { recieveQuestions, addQuestion, addQuestionAnswer } from './questions';
import { getIntialData, saveQuestion, saveQuestionAnswer } from '../utils/api';

export default function handelIntialData() {
	return (dispatch) => {
		return getIntialData().then(({ users, questions }) => {
			dispatch(recieveUsers(users));
			dispatch(recieveQuestions(questions));
			dispatch(unSetUthenUser());
		});
	};
}

export function saveNewQuestion(questionDetails) {
	return (dispatch) => {
		return saveQuestion(questionDetails).then((question) => {
			dispatch(addQuestion(question));
			dispatch(addQuestionToUser(question));
		});
	};
}

export function handelSaveQuestionAnswer({ authedUser, qid, answer }) {
	return (dispatch) => {
		return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
			dispatch(addQuestionAnswer({ authedUser, qid, answer }));
			dispatch(addAnswerdQuestionToUser({ authedUser, qid, answer }));
		});
	};
}
