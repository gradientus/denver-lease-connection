import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';





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
                                <Button >
                                    <Link className="editBtn" to={{ pathname: "/editlisting/" + listing._id, state: { listingId: listing._id } }}>Edit listing</Link>
                                </Button>

                                {/* <Button
                                    onClick={props.handleInactivate}>
                                    {props.btnTitle}
                                </Button> */}
                            </CardBody>
                            <CardFooter className='cardFooter'><strong>{listing.price}</strong></CardFooter>

                        </Card>
                    ))}
                </div>
            ) : (
                    <h3>No Results to Display</h3>
                )
            }


        </>
    );
};

export default index;