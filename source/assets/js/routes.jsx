import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import App from './containers/App.jsx';
import HomePage from './components/HomePage.jsx';

// Map components to different routes.
// the parent component warps other components and thus serves as the entrance to
// other React Component
// 

export default (
    <Route path="/" component={App}>
    </Route >
);