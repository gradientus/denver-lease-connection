import React from 'react';
import './style.css';

const index = (props) => {
    return (
        <div>
            <button type="button" className="btn btn-primary float-right" onClick={props.children}>Inactivate Listing</button>
        </div>
    );
};

export default index;