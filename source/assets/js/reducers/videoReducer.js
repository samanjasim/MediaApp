import initialState from './initialState.js';
import * as types from '../constants/actionTypes.js';

// Handles video related action
export default function(state = initialState.videos, action) {
    switch (action.type) {
        case types.SHUTTER_VIDEOS_SUCCESS:
            console.log('reducer video=  ', action.videos);
            console.log('reducer selectedVideo=  ', action.selectedVideo);

            return [...state, action.videos];
        case types.SELECTED_VEDIO:
            return {...state, selectedVideo: action.selectedVideo };
        default:
            return state;
    }
}