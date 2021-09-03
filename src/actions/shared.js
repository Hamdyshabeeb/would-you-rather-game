import { recieveUsers } from './users';
import { unSetUthenUser } from './authenUser';
import { getIntialData } from '../utils/api';

export default function handelIntialData() {
	return (dispatch) => {
		return getIntialData().then(({ users, questions }) => {
			dispatch(recieveUsers(users));
			dispatch(unSetUthenUser());
		});
	};
}
