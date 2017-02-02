import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import rootReducer
import rootReducer from '../reducers/index';


const initialState = {
	'black': false,
	blue: false,
	bothBoxes: false
}

const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;