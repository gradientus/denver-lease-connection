import React, { Component } from 'react';
import Navbar from '../components/LandlordNav';
import ListingForm from '../components/ListingForm';
import Footer from '../components/Footer';
import API from '../util/APIListing';
import EditForm from "../components/ListingEditForm";

class LandlordEditListing extends Component {
    state = {
        id: "",
        propertyName: "",
        details: "",
        price: ""
    };

    componentDidMount() {
        this.loadListingToEdit();
    }



    loadListingToEdit = () => {
        const listingId = this.props.match.params.id
        //console.log(listingId + "that's the listing id")
        this.setState({ id: listingId })

    };


    //handle data typed into form to set to state
    handleEditChange = event => {
        //create variables for the data that will be saved to state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //handle the form submit button
    handleFormSubmit = event => {
        event.preventDefault();
        console.log('handle form submit');
        if (this.state.propertyName && this.state.details && this.state.price) {
            API.updateListing({
                id: this.state.id,
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
                    handleEditChange={this.handleEditChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Footer />
            </>
        );
    }
}

export default LandlordEditListing;