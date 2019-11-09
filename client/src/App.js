import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/Main';
import LandlordListings from './pages/LandlordListings';
import LandlordApplicants from './pages/LandlordApplicants';


function App() {
  return (
    <Router>
      <div>



        <Route exact path='/' component={Main} />
        <Route exact path='/landlordList' component={LandlordListings} />
        <Route exact path='/applicants' component={LandlordApplicants} />




      </div>
    </Router>

  );
}

export default App;
