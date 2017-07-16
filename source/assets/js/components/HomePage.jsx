import React from 'react';
import {Link} from 'react-router-dom';

// Home page Component. this serves as the welcome page with link to the library
const HomePage = () => {
    return (
        <div className="jumbotron center">
            <h1 className="lead">Welcome to the Media Library built with React, Redux and ReduxSaga</h1>
            <div>
                <Link to="library">
                    <button className="btn btn-lg btn-primary"> Visit Library</button>
                </Link>
            </div>
        </div>
    )
};// HomePage

// class HomePage extends React.Component {

// }

export default HomePage;