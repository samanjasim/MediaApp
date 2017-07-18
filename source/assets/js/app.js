//require("babel-polyfill");
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Routes from './routes.jsx';
import App from './containers/App.jsx';
import {configureStore} from './store/configureStore.js';
// import HomePage from './components/HomePage.jsx';
// import MediaGalleryPage from './containers/MediaGalleryPage.jsx';
// import Header from './common/Header.jsx';
//import MainComponent from './components/MainComponent.jsx';
// Initialize store
//console.log(configureStore);
const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'));


{/*<Router>
                    <div>
                        <Switch>
                            <App exact path="/" component={HomePage} />
                            <App path="library" component={MediaGalleryPage} />
                        </Switch>
                    </div>
                </Router>, */}

