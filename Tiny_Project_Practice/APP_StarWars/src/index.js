import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import { getCharacters } from './reducers/characters/actions';

const store = createStore(reducer, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
	));

store.dispatch(getCharacters());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
  ,
  document.getElementById('root')
);
