import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import LandlordListings from "./pages/LandlordListings";
import LandlordApplicants from "./pages/LandlordApplicants";
import RenterApplication from "./pages/RenterApplication";
import LandlordAddListing from "./pages/LandlordAddListing";
import RenterLanding from "./pages/RenterLanding";
import FirstTimeUser from "./pages/FirstTimeUser";
import ChatLanding from "./pages/ChatLanding";
import EditListing from "./pages/LandlordEditListing";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/landlordList" component={LandlordListings} />
        <Route exact path="/addlisting" component={LandlordAddListing} />
        <Route exact path="/applicants" component={LandlordApplicants} />
        <Route exact path="/renterapp" component={RenterApplication} />
        <Route exact path="/renter" component={RenterLanding} />
        <Route exact path="/newUser" component={FirstTimeUser} />
        <Route exact path="/Chat" component={ChatLanding} />
        <Route exact path="/editlisting" component={EditListing} />

      </div>
    </Router>
  );
}

export default App;
