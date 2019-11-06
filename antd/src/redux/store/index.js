import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import {createRooteReducer} from 'REDUCER'

const loggerMiddleware = createLogger();
const initialState = {};

const store = createStore(
    createRooteReducer(),
    initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;