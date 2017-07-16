require("babel-polyfill");
import { put, call } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos } from '../Api/api.js';
import * as types from '../constants/actionTypes.js';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure
export function* searchMediaSaga({ payload }) {
    try {
        const videos = yield call(shutterStockVideos, payload);
        const images = yield call(flickrImages, payload);
        const selectedVideo = videos[0];
        const selectedImage = images[0];



        console.log('from mediaSaga videos= ', videos);
        console.log(`from mediaSaga videos[0]= ${videos[0]}`);
        console.log(videos[0]);
        console.log('from mediaSaga images= ', images);
        console.log('from mediaSaga selectedImage= ', selectedImage);


        console.log('type.SHUTTER_VIDEOS_SUCCESS= ', types.SHUTTER_VIDEOS_SUCCESS);
        console.log('type.FLICKR_IMAGES_SUCCESS= ', types.FILCKR_IMAGES_SUCCESS);

        yield [
            put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
            put({ type: types.SELECTED_VEDIO, selectedVideo }),
            put({ type: types.FILCKR_IMAGES_SUCCESS, images }),
            put({ type: types.SELECTED_IMAGE, selectedImage })
        ];
    } catch (error) {
        yield put({ type: 'SEARCH_MEDIA_ERROR', error });
    }
}