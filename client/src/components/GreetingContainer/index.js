import React from 'react';
import './style.css';
import { Button, Link } from 'reactstrap';

const index = () => {
    return (
        <div>
            <div className="jumbotron">
                {/* TODO: props to bring in user name  */}
                <h4 className='welcome'>Welcome *(user name here)*{/*Name of Landlord in here using props*/}</h4>
                <br></br>
                <a href='/addlisting'><Button color='primary'>Add New Listing</Button></a>
            </div>
        </div>
    );
};

export default index;