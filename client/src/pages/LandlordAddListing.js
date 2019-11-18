import React, { Component } from 'react';
import ListingForm from '../components/ListingForm';
import LandlordNav from '../components/LandlordNav';
import API from "../util/APIListing";
import APIUsers from '../util/APIUser'








class LandlordAddListing extends Component {

    state = {
        propertyName: "",
        details: "",
        price: "",
        user: {}
    };

    loadCurrentUser = () => {
        APIUsers.getCurrentUser()
            .then(res =>
                this.setState({ user: res.data })

            )
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadCurrentUser();

    }



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
                price: this.state.price,
                user: this.state.user
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
                    user={this.state.user}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </>
        );
    }
}

export default LandlordAddListing;