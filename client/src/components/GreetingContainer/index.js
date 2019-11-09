import React from 'react';
import './style.css';

const index = () => {
    return (
        <div>
            <div className="jumbotron">
                {/* TODO: props to bring in user name  */}
                <h4 className='welcome'>Welcome *(user name here)*{/*Name of Landlord in here using props*/}</h4>
                <br></br>
                <button type="button" class="btn btn-primary">Add New Listing</button>
            </div>
        </div>
    );
};

export default index;