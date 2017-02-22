import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import IdeaListReducer from './reducer_ideasList';


	const rootReducer = combineReducers({
		bands: BandsReducer,
		ideaList: IdeaListReducer
	});

	export default rootReducer;