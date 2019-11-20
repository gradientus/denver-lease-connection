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
        propertyName: "",
        details: "",
        price: "",
        isActive: "",
        currentUser: {}
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


    handleEdit = (e) => {
        e.preventDefault();

        //grab the item clicked by the item id and go to a new screen to edit the data
        console.log('Edit button was clicked')
    }

    handleInactivate = (e) => {
        e.preventDefault();
        //toggle active / inactive
        {
            this.isActive ?
                this.setState({ isActive: false }) : this.setState({ isActive: true })
        }
        console.log('button to inactivate was clicked')
    }



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
                    handleInactivate={this.handleInactivate}
                />
                <Footer />
            </>
        );
    }
}

export default LandlordListings;