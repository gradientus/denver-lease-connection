import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";

const index = props => {
  return (
    <Col>
      {/* TODO: need to add a conditional to test if the listing isActive = true then only return those listings */}
      {props.listings.length ? (
        <div className="cardDiv">
          {props.listings.map(listing => (
            <Card key={listing._id}>
              <CardHeader className="cardHeader">
                {listing.propertyName}
              </CardHeader>
              <CardBody>
                <img
                  src="https://images.craigslist.org/00101_daosvbG18Yj_600x450.jpg"
                  className="card-img-top"
                  alt="property"
                />
                <p>{listing.details}</p>
                <Button>Apply</Button>
                <Button className="chatBtn">
                  <Link className="chatLink" to={"/Chat"}>Chat with landlord</Link>
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


