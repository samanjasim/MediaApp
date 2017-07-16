import * as types from '../constants/actionTypes.js';

// Return an Action Type, SELECTED_IMAGE and the image selected
export const selectImageAction = (image) => ({
    type: types.SELECTED_IMAGE,
    selectedImage: image
});

// Return an Action Type, SELECTED_VEDIO and the Video selected.
export const selectVideoAction = (video) => ({
    type: types.SELECTED_VEDIO,
    selectedVideo: video
});

// Return an action type, SEARCH_MEDIA_REQUEST and the search criteria
export const searchMediaAction = (payload) => ({
    type: types.SEARCH_MEDIA_REQUEST,
    payload
});