import React from 'react';

const Navbar = ({ brand }) => {
    return (
        <nav className="navbar navbar-dar bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand text-uppercase">{brand}</a>
            </div>
        </nav>
    )
}

export default Navbar;