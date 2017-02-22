// Action Constant Names
const SELECT_BAND = 'SELECT_BAND';
export function selectBand(band) {
	console.log("You have selected:", band.name);
	return{
	type: SELECT_BAND,
	payload:band
	};
}

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