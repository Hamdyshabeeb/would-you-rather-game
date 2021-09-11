import { RECIEVE_USERS } from '../actions/users';
import {
	ADD_QUESTION_TO_USER,
	ADD_ANSWERED_QUESTION_TO_USER,
} from '../actions/users';

export default function users(state = {}, action) {
	switch (action.type) {
		case RECIEVE_USERS:
			return { ...state, ...action.users };
		case ADD_QUESTION_TO_USER:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: [
						...state[action.question.author].questions,
						action.question.id,
					],
				},
			};
		case ADD_ANSWERED_QUESTION_TO_USER:
			return {
				...state,
				[action.info.authedUser]: {
					...state[action.info.authedUser],
					answers: {
						...state[action.info.authedUser].answers,
						[action.info.qid]: action.info.answer,
					},
				},
			};
		default:
			return state;
	}
}
