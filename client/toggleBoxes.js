import React from 'react';
import { render } from 'react-dom';

import css from './static/style/style.styl';

//import components

import App from './components/App';

// import react router dependecie

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import redux
import {Provider} from 'react-redux';
import store , {history} from './stores/store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>

			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'))
 