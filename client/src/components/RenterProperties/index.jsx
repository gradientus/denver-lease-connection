import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";

const index = (props) => {
  return (
    <Col>
      {/* TODO: need to add a conditional to test if the listing isActive = true then only return those listings */}
      {props.listings.length ? (
        <div>
          {props.listings.map(listing => (
            <Card key={listing._id}>
              <CardHeader className="cardHeader">{listing.propertyName}</CardHeader>
              <CardBody>
                <img
                  src="https://images.craigslist.org/00101_daosvbG18Yj_600x450.jpg"
                  className="card-img-top"
                  alt="property"
                />
                <p>{listing.details}</p>
                <Button>Apply</Button>
                <Button>
                  <Link to={'/Chat'}>Chat with landlord</Link>
                </Button>
              </CardBody>
              <CardFooter className="cardFooter">
                <strong>{listing.price}</strong>

              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
          <h3>No results to Display</h3>
        )}
    </Col>
  );
};

export default index;

//TODO: Need to track the onclick here, this puts the user into applicants
//TODO: Need to pull the information from the MongoDB
//TODO: Need to loop through all the active properties
//TODO: Need to pull in props?
