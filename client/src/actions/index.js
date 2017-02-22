import axios from 'axios';

export const CREATE_POSTS = 'CREATE_POSTS';

const ROOT_URL = 'http://rest.learncode.academy/api/cameronhouser'

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