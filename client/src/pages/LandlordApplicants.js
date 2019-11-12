import React, { Component } from 'react';
import LandNavbar from '../components/LandlordNav';
import Applicant from '../components/ApplicantContainer';
import BackgroundCont from '../components/BackgroundCheckContainer'

class LandlordApplicants extends Component {
    render() {
        return (
            <div>
                <LandNavbar />
                <Applicant />
                <BackgroundCont />

            </div>
        );
    }
}

export default LandlordApplicants;