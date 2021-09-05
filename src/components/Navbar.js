import React from 'react';

const Navbar = ({ brand }) => {
    return (
        <nav className="navbar bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand text-uppercase navbar__text">{brand}</a>
            </div>
        </nav>
    )
}

export default Navbar;