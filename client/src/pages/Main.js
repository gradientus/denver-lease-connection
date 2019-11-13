import React from 'react';
import Navbar from '../components/Navbar'
import GoogleSignIn from '../components/GoogleSignIn';



const Main = () => {
    return (
        <div>
            <Navbar>
                {/* TODO: dynamically change links based on URL */}

            </Navbar>

            <GoogleSignIn />
        </div>
    );
};

export default Main;