import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER } from './types';
import authReducer from '../reducers/auth_reducer';

export const CREATE_POSTS = 'CREATE_POSTS';
// const ROOT_URL = 'http://rest.learncode.academy/api/cameronhouser'
const ROOT_URL = 'http://localhost:3000';



export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
		.then(response => {
			dispatch({ type: AUTH_USER });

			localStorage.setItem('token', response.data.token);
			browserHistory.push('/newitem');
		})
		.catch(() => {

		});
	}
}
export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/post`, props);
	return {
		type: CREATE_POSTS,
		payload:request
	};
}



// Action Constant Names
// const SELECT_BAND = 'SELECT_BAND';
// export function selectBand(band) {
// 	console.log("You have selected:", band.name);
// 	return{
// 	type: SELECT_BAND,
// 	payload:band
// 	};
// }

//This is our action
// const ADD_BAND = 'ADD_BAND';
// {
// 	type: ADD_BAND,
// 	payload:band
// }

// const DELETE_BAND = 'DELETE_BAND'
// {
// 	type: DELETE_BAND,
// 	payload:band
// }