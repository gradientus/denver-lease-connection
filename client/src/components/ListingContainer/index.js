import React, { Component } from 'react';
import './style.css';
import EditBtn from '../EditButton';
import InactiveBtn from '../InactiveButton';
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';


const index = props => {
    return (
        <>

            {props.listings.length ? (
                <div className='cardDiv'>
                    {props.listings.map(listing => (
                        <Card key={listing._id}>
                            <CardHeader className='cardHeader'>{listing.propertyName}</CardHeader>
                            <CardBody>
                                <img src="https://images.craigslist.org/00101_daosvbG18Yj_600x450.jpg" className="card-img-top" alt="placeholder" />
                                <p>{listing.details}</p>
                                <EditBtn>
                                    {props.handleEdit}
                                </EditBtn>
                                <InactiveBtn>
                                    {props.handleInactivate}
                                </InactiveBtn>
                            </CardBody>
                            <CardFooter className='cardFooter'><strong>{listing.price}</strong></CardFooter>

                        </Card>
                    ))}
                </div>
            ) : (
                    <h3>No Results to Display</h3>
                )}


        </>
    );
};

export default index;