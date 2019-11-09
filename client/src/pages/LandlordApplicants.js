import React, { Component } from 'react';
import LandNavbar from '../components/LandlordNav';
import Applicant from '../components/ApplicantContainer';

class LandlordApplicants extends Component {
    render() {
        return (
            <div>
                <LandNavbar />
                <Applicant />

            </div>
        );
    }
}

export default LandlordApplicants;