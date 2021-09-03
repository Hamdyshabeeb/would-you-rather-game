import { combineReducers } from 'redux';
import users from './users';
import authenUser from './authenUser';

export default combineReducers({
	users,
	authenUser,
});
