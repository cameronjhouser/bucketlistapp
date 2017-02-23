import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';


// import ListItem from '../components/list/new-list-item';

// import SelectedBand from './reducer_selectedband';
// import BandsReducer from './reducer_bands';
// import IdeaListReducer from './reducer_ideasList';
// import BucketListReducer from './reducer_bucketlist';

	const rootReducer = combineReducers({
		form: formReducer,
		auth: authReducer
		// bands: BandsReducer,
		// bucketlist: BucketListReducer,
		// ideaList: IdeaListReducer,
		// selectedBand: SelectedBand
	});

	export default rootReducer;