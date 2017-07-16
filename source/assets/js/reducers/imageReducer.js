import initialState from './initialState.js';
import * as types from '../constants/actionTypes.js';

// Handles images related action
export default function(state = initialState.images, action) {
    console.log('action in imageReducer= ', action);
    switch (action.type) {
        case types.FILCKR_IMAGES_SUCCESS:
            console.log('REDUCER IMAGES= ', action.images);
            console.log('REDUCER action= ', action);
            console.log('REDUCER selectedImage= ', action.selectedImage);

            return [...state, action.images];
        case types.SELECTED_IMAGE:
            return {...state, selectedImage: action.selectedImage };
        default:
            return state;
    }
}