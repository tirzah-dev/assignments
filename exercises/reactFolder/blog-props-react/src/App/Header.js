import React from 'react';
import HeaderNav from './HeaderNav';

function Header (){
    return (
        <div className="header">
            <HeaderNav />
            <h1 className="header">Clean Blog</h1>
            <h3>A Blog Theme by Start Bootstrap</h3>
        </div>
    );
}

export default Header;