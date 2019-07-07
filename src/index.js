import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore }  from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './container/App';

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);

