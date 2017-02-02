import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';



function reducer (state= [] , action) {

	 var newState = {}
	  // Ask questions of action.type to decide how we're building the new state
	  switch(action.type) {
	    case "TOGGLE_SINGLE_BOX":
	      // Toggle the boolean for action.boxColor, which will evaluate to either black or blue
	      newState[action.boxColor] = !state[action.boxColor]
	      return Object.assign({}, state, newState);
	    case "TOGGLE_ALL_BOXES":
	      // Toggle the bothBoxes boolean
	      newState.bothBoxes = !state.bothBoxes;
	      // Check to see if black and blue are equal
	      if(state.black === state.blue){
	        // If so, simply flip each value
	        newState.black = !state.black;
	        newState.blue = !state.blue;
	      } else {
	        // If not, just set black and blue to the toggled bothBoxes value
	        newState.black = !state.bothBoxes;
	        newState.blue = !state.bothBoxes;
	      }
	      // Return an updated state w/ Object.assign
	      return Object.assign({}, state, newState);
	    default:
	      return state
	  }


}


const rootReducer = combineReducers({reducer, routing: routerReducer})
export default rootReducer;