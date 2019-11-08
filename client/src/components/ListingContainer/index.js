import React, { Component } from 'react';
import './style.css';
import EditBtn from '../EditButton';
import InactiveBtn from '../InactiveButton';

class index extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>

                        <div className="card">
                            <img src="https://images.craigslist.org/00101_daosvbG18Yj_600x450.jpg" className="card-img-top" alt="placeholder" />
                            <div className="card-body">
                                <h5 className="card-title">Listing Title</h5>
                                <p className="card-text">This is a 2 Bedroom, 2 Bath, approximately 1082 Sq. Ft. $1600/mo</p>

                                <EditBtn />
                                <InactiveBtn />

                            </div>
                        </div>


                        <div className="card">
                            <img src="https://images.craigslist.org/00101_daosvbG18Yj_600x450.jpg" className="card-img-top" alt="placeholder" />
                            <div className="card-body">
                                <h5 className="card-title">Listing Title</h5>
                                <p className="card-text">This is a 2 Bedroom, 2 Bath, approximately 1082 Sq. Ft. $1600/mo</p>

                                <EditBtn />
                                <InactiveBtn />

                            </div>
                        </div>

                        <div className="card">
                            <img src="https://images.craigslist.org/00101_daosvbG18Yj_600x450.jpg" className="card-img-top" alt="placeholder" />
                            <div className="card-body">
                                <h5 className="card-title">Listing Title</h5>
                                <p className="card-text">This is a 2 Bedroom, 2 Bath, approximately 1082 Sq. Ft. $1600/mo</p>

                                <EditBtn />
                                <InactiveBtn />

                            </div>
                        </div>



                    </div>
                </div>


            </div>
        );
    }
}

export default index;