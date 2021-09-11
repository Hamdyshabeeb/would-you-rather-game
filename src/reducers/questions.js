import {
	RECIEVE_QUESTIONS,
	ADD_QUESTION_ANSWER,
	ADD_QUESTION,
} from '../actions/questions';

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECIEVE_QUESTIONS:
			return { ...state, ...action.questions };
		case ADD_QUESTION:
			return { ...state, [action.question.id]: action.question };
		case ADD_QUESTION_ANSWER:
			return {
				...state,
				[action.info.qid]: {
					...state[action.info.qid],
					[action.info.answer]: {
						...state[action.info.qid][action.info.answer],
						votes: [
							...state[action.info.qid][action.info.answer].votes,
							action.info.authedUser,
						],
					},
				},
			};
		default:
			return state;
	}
}
