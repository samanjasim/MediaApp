import React from 'react';
import Header from '../common/Header.jsx';

const DefaultLayout = ({children}) => (
    <div className = "container-fluid text-center">
        <Header />
        {children}
    </div>
)

export default DefaultLayout;