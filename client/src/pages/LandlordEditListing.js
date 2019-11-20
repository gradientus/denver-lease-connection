import React, { Component } from 'react';
import Navbar from '../components/LandlordNav';
import ListingForm from '../components/ListingForm';
import Footer from '../components/Footer';
import API from '../util/APIListing';
import EditForm from "../components/ListingEditForm";

class LandlordEditListing extends Component {
    state = {
        propertyName: "",
        details: "",
        price: ""
    };

    componentWillMount() {
        this.loadListingToEdit();
    }

    loadListingToEdit = () => {
        API.getListing()
            .then(res =>
                this.setState({ propertyName: "", details: "", price: "" })
            )
            .catch(err => console.log(err));
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
                price: this.state.price,
                // user: this.state.user
            })

                .then(res => window.location.href = '/landlordList')

                .catch(err => console.log(err))
        } else {
            alert("All fields must be complete")
        }
    }


    render() {
        return (
            <>
                <Navbar />
                <EditForm
                    propertyName={this.state.propertyName}
                    details={this.state.details}
                    price={this.state.price}
                />
                <Footer />
            </>
        );
    }
}

export default LandlordEditListing;