require("babel-polyfill");
import {takeLatest} from 'redux-saga/effects';
import {searchMediaSaga} from './mediaSaga.js';
import * as types from '../constants/actionTypes.js';

// watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchSearchMedia() {
    yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}