// use 'esversion: 6'
import { combineReducers } from 'redux';
import images from './imageReducer.js';
import videos from './videoReducer.js';

// combine all reducers to single reducer function
const rootReducer = combineReducers({
    images,
    videos
});

export default rootReducer;