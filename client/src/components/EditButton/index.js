import React from 'react';
import './style.css';

const index = props => {
    return (
        <div>
            <button type="button" className="btn btn-primary float-left" onClick={props.children}>Edit Listing</button>
        </div>
    );
};

export default index;