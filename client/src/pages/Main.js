import React from 'react';
import Navbar from '../components/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar>
                <a className="nav-item nav-link text-primary" href="#">Login</a>
                <a className="nav-item nav-link text-primary" href="#">Sign-up</a>
            </Navbar>
        </div>
    );
};

export default Main;