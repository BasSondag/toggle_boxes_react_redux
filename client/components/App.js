import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
	return {
		black: state.reducer.black,
		blue: state.reducer.blue

	}
};

function mapDispachToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);

};


const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;