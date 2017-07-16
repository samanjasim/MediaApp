import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

// const Header = () => (
//     <div className="text-center">
//         <nav className="navbar navbar-default">
//             <NavLink to="/" activeClassName="active">Home</NavLink>
//             {" | "}
//             <Link to="library" activeClassName="active">Library</Link>
//         </nav>
//     </div>
// ); //Header

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log('render header');
        return(
            <div className="text-center">
                <nav className="navbar navbar-default">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    {" | "}
                    <NavLink to="library" activeClassName="active">Library</NavLink>
                </nav>
            </div>
        );
    }
}

export default Header;