import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    usersReducer: usersReducer
});

export default createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
