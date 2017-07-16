import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index.js';
import rootSaga from '../sagas/index.js'; // foreman

// TODO: Return the Store instance
// it can also take initialState argument when provided
export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer,
            applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};