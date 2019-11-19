import React, { Component } from 'react';
import ListingForm from '../components/ListingForm';
import LandlordNav from '../components/LandlordNav';
import API from "../util/APIListing";
import { Redirect } from 'react-router-dom';







class LandlordAddListing extends Component {

    state = {
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

                .then(res => window.location.href = '/landlordList')
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