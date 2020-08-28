import React from 'react';
import logo from '../../images/online-class.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="text-center" >
            <h1>Hello Online Class(spread learning,be happy)</h1>
            <img src={logo} alt="" />
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
               
                <div class="navbar navbar-dark bg-dark collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/Courses">Courses <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="/review">Course Review</a>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;