import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
// import BucketListReducer from './reducer_bucketlist';
import SelectedBand from './reducer_selectedband';
import { reducer as formReducer } from 'redux-form';

// import IdeaListReducer from './reducer_ideasList';


	const rootReducer = combineReducers({
		form: formReducer
		// bands: BandsReducer,
		// bucketlist: BucketListReducer,
		// ideaList: IdeaListReducer,
		// selectedBand: SelectedBand
	});

	export default rootReducer;