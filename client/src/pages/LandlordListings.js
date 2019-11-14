import React, { Component } from 'react';
import LandNavbar from '../components/LandlordNav';
import Greeting from '../components/GreetingContainer';
import ListingContainer from '../components/ListingContainer';

class LandlordListings extends Component {




    render() {
        return (
            <div>
                <LandNavbar />
                <Greeting />
                <ListingContainer />
                {/* TODO: add footer here */}
            </div>
        );
    }
}

export default LandlordListings;