import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './style.css';

const index = () => {
    return (
        <>
            <Jumbotron>
                <p><h4>To proceed please select whether you are a landlord or a tenant.</h4></p>
                <Button onClick={() => window.location.href = '/landlordList'}>Continue as a Landlord</Button>
                <Button className="tenantBtn" onClick={() => window.location.href = '/renter'}>Continue as a Tenant</Button>
            </Jumbotron>
        </>
    );
};

export default index;