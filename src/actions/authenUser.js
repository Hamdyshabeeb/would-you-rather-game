export const SET_AUTHEN_USER = 'SET_AUTHEN_USER';
export const UNSET_AUTHEN_USER = 'UNSET_AUTHEN_USER';

export function setUthenUser(id) {
	return {
		type: SET_AUTHEN_USER,
		id,
	};
}

export function unSetUthenUser() {
	return {
		type: UNSET_AUTHEN_USER,
	};
}
