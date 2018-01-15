import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><IndexLink to="/" activeClassName="active">About</IndexLink></li>
                <li className="breadcrumb-item"><Link to="/about" activeClassName="active">Working Experience</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/profit" activeClassName="active">Profit</Link></li>
            </ol>
        </nav>
    );
};

export default Header;