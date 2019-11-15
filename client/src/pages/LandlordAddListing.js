import React, { Component } from 'react';
import ListingForm from '../components/ListingForm';
import LandlordNav from '../components/LandlordNav';
import API from "../util/APIListing";







class LandlordAddListing extends Component {

    state = {
        listings: [],
        propertyName: "",
        details: "",
        price: ""
    };

    //handle data typed into form to set to state
    handleInputChange = event => {
        //create variables for the data that will be saved to state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //handle the form submit button
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.propertyName && this.state.details && this.state.price) {
            API.saveListing({
                propertyName: this.state.propertyName,
                details: this.state.details,
                price: this.state.price
            })
                //TODO: pop-up modal confirming listing was added or go to a new page asking if they want to add another listing or finished which will redirect them to their listings)
                .then(res => console.log('new listing added for: ' + this.state.propertyName))
                .catch(err => console.log(err))
        } else {
            alert("You must complete all fields before submitting")
        }
    }



    render() {
        return (
            <>
                <LandlordNav />
                <ListingForm
                    propertyName={this.state.propertyName}
                    details={this.state.details}
                    price={this.state.price}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </>
        );
    }
}

export default LandlordAddListing;