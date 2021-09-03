import { combineReducers } from 'redux';
import users from './users';
import authenUser from './authenUser';
import questions from './questions';

export default combineReducers({
	users,
	questions,
	authenUser,
});
