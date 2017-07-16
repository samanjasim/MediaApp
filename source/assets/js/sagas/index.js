require("babel-polyfill");
import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher.js';

// here we register our watcher saga(s) and export as single generator
// function (startForeman) as our root Saga.
export default function* startForeman() {
    yield fork(watchSearchMedia);
}