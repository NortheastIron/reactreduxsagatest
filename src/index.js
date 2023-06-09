import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./redux/root-reducer";

import './index.css';
import App from './App';
import {forbiddenWordsMiddleware} from "./redux/middleware";
import {sagaWatcher} from "./redux/sagas";


// import reportWebVitals from './reportWebVitals';
const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

saga.run(sagaWatcher);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    app
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
