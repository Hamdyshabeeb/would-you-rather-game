import { recieveUsers } from './users';
import { unSetUthenUser } from './authenUser';
import { recieveQuestions } from './questions';
import { getIntialData } from '../utils/api';
import { saveQuestion } from '../utils/api';
import { addQuestion } from './NewQuestion';

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
			console.log(question);
			dispatch(addQuestion(question));
		});
	};
}
