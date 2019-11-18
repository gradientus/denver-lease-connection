import React from 'react';
import './style.css';
import { Button, Link } from 'reactstrap';

const index = (props) => {
    return (
        <div>
            <div className="jumbotron">

                <h4 className='welcome'>Welcome {props.user.firstName}!</h4>
                <br></br>
                <a href='/addlisting'><Button color='primary'>Add New Listing</Button></a>
            </div>
        </div>
    );
};

export default index;