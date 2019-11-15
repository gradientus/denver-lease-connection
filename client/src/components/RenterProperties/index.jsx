import React from "react";
import "./style.css";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";

const RenterProperties = () => {
  return (
    <Col>
      <Card>
        <CardHeader className="cardHeader">Property Name</CardHeader>
        <CardBody>
          <img
            src="https://images.craigslist.org/00101_daosvbG18Yj_600x450.jpg"
            className="card-img-top"
            alt="property"
          />
          <p>This is a 2 Bedroom, 2 Bath, approximately 1082 Sq. Ft.</p>
        </CardBody>
        <CardFooter className="cardFooter">
          <strong>$1600 /mo</strong>
          <Button>Apply</Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default RenterProperties;

//TODO: Need to track the onclick here, this puts the user into applicants
//TODO: Need to pull the information from the MongoDB
//TODO: Need to loop through all the active properties
//TODO: Need to pull in props?
