import React, { Component } from 'react';
import LandNavbar from '../components/LandlordNav';
import Greeting from '../components/GreetingContainer';
import ListingContainer from '../components/ListingContainer';
import Footer from '../components/Footer';
import API from '../util/APIListing';
import { Col, Row } from 'reactstrap';


class LandlordListings extends Component {
    state = {
        listings: [],
        propertyName: "",
        details: "",
        price: ""
    };

    componentDidMount() {
        this.loadListings();
    }

    loadListings = () => {
        API.getListings()
            .then(res =>
                this.setState({ listings: res.data, propertyName: "", details: "", price: "" })

            )

            .catch(err => console.log(err));
    };



    render() {
        return (
            <div>
                <LandNavbar />
                <Greeting />
                <Row>
                    <Col sm="4">
                        <ListingContainer
                            listings={this.state.listings}
                            propertyName={this.state.propertyName}
                            details={this.state.details}
                            price={this.state.price}
                        />
                    </Col>
                </Row>
                <Footer />
            </div >
        );
    }
}

export default LandlordListings;