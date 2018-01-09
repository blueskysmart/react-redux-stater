import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li className="breadcrumb-item"><Link to="/about" activeClassName="active">About</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/courses" activeClassName="active">Courses</Link></li>
            </ol>
        </nav>
    );
};

export default Header;