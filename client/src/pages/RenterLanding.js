import React, { Component } from "react";
import RenterNav from "../components/RenterNav";
import RenterProperties from "../components/RenterProperties";
import Footer from "../components/Footer";
import API from '../util/APIListing';



class RenterLanding extends Component {
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
        <RenterNav />
        <RenterProperties
          listings={this.state.listings}
          propertyName={this.state.propertyName}
          detail={this.state.details}
          price={this.state.price}
        />
        <Footer />
      </div>
    );
  }
}

export default RenterLanding;



//TODO: I think I need state here to track which property was applied for.
