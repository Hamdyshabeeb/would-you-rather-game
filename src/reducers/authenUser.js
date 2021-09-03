import { SET_AUTHEN_USER } from '../actions/authenUser';
import { UNSET_AUTHEN_USER } from '../actions/authenUser';

export default function authenUser(state = null, action) {
	switch (action.type) {
		case SET_AUTHEN_USER:
			return action.id;
		case UNSET_AUTHEN_USER:
			return null;
		default:
			return state;
	}
}
