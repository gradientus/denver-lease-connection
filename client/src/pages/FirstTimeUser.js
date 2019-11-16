import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NewUser from '../components/NewUser';

class FirstTimeUser extends Component {
    state = {
        role: ""
    }


    render() {
        return (
            <>
                <Navbar />
                <NewUser />
            </>
        );
    }
}

export default FirstTimeUser;