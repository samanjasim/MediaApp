import React, {Component, PropTypes} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Header from '../common/Header.jsx';
import HomePage from '../components/HomePage.jsx';
import MediaGalleryPage from '../containers/MediaGalleryPage.jsx';
import DefaultLayout from '../layouts/DefaultLayout.jsx';

// the parent component renders the Header component and components in the
// route the user navigates to.

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         //console.log('props= ', props);
//     } // constructor

//     render() {
//         console.log('the props= ', this.props);
//         return (
//             <Router>
//                 <Switch>
//                 <DefaultLayout>
//                         <Switch>
//                             <Route path="/" exact component={HomePage} />
//                             <Route path="/library" component={MediaGalleryPage} />
//                         </Switch>
//                     </DefaultLayout>
//                 </Switch>
//             </Router>
//         );
//     }
// } // App Component
// const App = ({component: Component, ...rest}) => {
//     console.log('component', Component);
//   return (
//     <Route {...rest} render={matchProps => (
//       <div className="container-fluid text-center">
//         <Header />
//           <Component {...matchProps} />
//         <div className="Footer">Footer</div>
//       </div>
//     )} />
//   )
// };

const App = () => {
    return (
       <Switch>
            <DefaultLayout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/library" component={MediaGalleryPage} />
                </Switch>
            </DefaultLayout>
        </Switch>
    );
}
// App.propTypes = {
//     children: PropTypes.object.isRequired
// };
                // 

export default App; 