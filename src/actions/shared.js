import { recieveUsers } from './users';
import { unSetUthenUser } from './authenUser';
import { recieveQuestions } from './questions';
import { getIntialData } from '../utils/api';

export default function handelIntialData() {
	return (dispatch) => {
		return getIntialData().then(({ users, questions }) => {
			dispatch(recieveUsers(users));
			dispatch(recieveQuestions(questions));
			dispatch(unSetUthenUser());
		});
	};
}
