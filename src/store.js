import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import createLogger from './redux-logger'
import createSagaMiddleware from './redux-saga'

const logger = createLogger();
const sagaMiddleare = createSagaMiddleware();

export default function configureStore(initialState = {}) {
    const middlewares = [logger, sagaMiddleare];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(
        reducers,
        initialState,
        compose(...enhancers)
    );

    store.runSaga = sagaMiddleare.run;
    store.asyncReducers = {}; //Async reducer registry
    return store;
}