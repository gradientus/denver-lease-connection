import React from 'react';

const index = () => {
    return (
        <div>
            {/* TODO: How do we want to handle navbar between users */}
            {/* TODO: props to bring in user name  */}
            <h3 className='Welcome'>Welcome{/*Name of Landlord in here using props*/}</h3>
            <button type="button" class="btn btn-primary">Add New Listing</button>
        </div>
    );
};

export default index;