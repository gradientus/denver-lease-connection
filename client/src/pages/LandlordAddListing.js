import React, { Component } from 'react';
import ListingForm from '../components/ListingForm';
import LandlordNav from '../components/LandlordNav';

class LandlordAddListing extends Component {
    render() {
        return (
            <div>
                <LandlordNav />
                <ListingForm />
            </div>
        );
    }
}

export default LandlordAddListing;