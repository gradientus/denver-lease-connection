import React, { Component } from 'react';
import LandNavbar from '../components/LandlordNav';
import Greeting from '../components/GreetingContainer';
import ListingContainer from '../components/ListingContainer';
import Footer from '../components/Footer';
import API from '../util/APIListing';
import APIUsers from '../util/APIUser'
import { Col, Row, Card } from 'reactstrap';




class LandlordListings extends Component {
    state = {
        listings: [],
        id: "",
        propertyName: "",
        details: "",
        price: "",
        isActive: "",
        currentUser: {},
    };

    loadCurrentUser = () => {
        APIUsers.getCurrentUser()
            .then(res =>
                this.setState({ currentUser: res.data })

            )
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadCurrentUser();
        this.loadListings();
    }

    loadListings = () => {
        API.getListings()
            .then(res =>
                this.setState({ listings: res.data, propertyName: "", details: "", price: "", isActive: "" })

            )

            .catch(err => console.log(err));
    };

    // handleInactivate = (e) => {
    //     console.log(this.props.match.listingId)
    //     e.preventDefault();
    //     console.log('button to inactivate was clicked')
    //     if (this.state.isActive === true) {
    //         API.updateListing({
    //             id: this.state.id,
    //             isActive: this.state.isActive,
    //         })
    //         this.setState({ isActive: false, btnTitle: "Inactive" })
    //     }
    // }



    render() {
        return (
            <>
                <LandNavbar />
                <Greeting
                    currentUser={this.state.currentUser}
                />
                <ListingContainer
                    listings={this.state.listings}
                    propertyName={this.state.propertyName}
                    details={this.state.details}
                    price={this.state.price}
                    isActive={this.state.isActive}
                    handleEdit={this.handleEdit}
                // handleInactivate={this.handleInactivate}
                // btnTitle={this.state.btnTitle}
                />
                <Footer />
            </>
        );
    }
}

export default LandlordListings;