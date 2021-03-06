import React from "react";
import RenterNav from "../RenterNav";
//import API from "../../util/API";
import { Button, Jumbotron, Form, FormGroup, Label, Input } from "reactstrap";

const ApplicationForm = props => {
  return (
    <div>
      <RenterNav />
      <div className="container">
        <Jumbotron className="display-4 text-center">
          Renter Application
        </Jumbotron>
        <Form>
          <FormGroup>
            <Label for="firstName">First Name*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.firstName}
              type="text"
              name="firstName"
              id="firstNameId"
              placeholder="Hugh"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.lastName}
              type="text"
              name="lastName"
              id="lastNameId"
              placeholder="Jaynus"
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Street Address*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.address}
              type="text"
              name="address"
              id="addressId"
              placeholder="433 Main St. #2"
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.city}
              type="text"
              name="city"
              id="cityId"
              placeholder="Edgewater"
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.state}
              type="select"
              name="state"
              id="stateId"
            >
              <option>Alabama</option>
              <option>Alaska</option>
              <option>Arizona</option>
              <option>Arkansas</option>
              <option>California</option>
              <option>Colorado</option>
              <option>Connecticut</option>
              <option>Delaware</option>
              <option>DC</option>
              <option>Florida</option>
              <option>Georgia</option>
              <option>Hawaii</option>
              <option>Idaho</option>
              <option>Illinois</option>
              <option>Indiana</option>
              <option>Iowa</option>
              <option>Kansas</option>
              <option>Kentucky</option>
              <option>Louisiana</option>
              <option>Maine</option>
              <option>Maryland</option>
              <option>Massachusetts</option>
              <option>Michigan</option>
              <option>Minnesota</option>
              <option>Mississippi</option>
              <option>Missouri</option>
              <option>Montana</option>
              <option>Nebraska</option>
              <option>Nevada</option>
              <option>New Hampshire</option>
              <option>New Jersey</option>
              <option>New Mexico</option>
              <option>New York</option>
              <option>North Carolina</option>
              <option>North Dakota</option>
              <option>Ohio</option>
              <option>Oklahoma</option>
              <option>Oregon</option>
              <option>Pennsylvania</option>
              <option>Puerto Rico</option>
              <option>Rhode Island</option>
              <option>South Carolina</option>
              <option>South Dakota</option>
              <option>Tennessee</option>
              <option>Texas</option>
              <option>Utah</option>
              <option>Vermont</option>
              <option>Virginia</option>
              <option>Washington</option>
              <option>West Virgina</option>
              <option>Wisconsin</option>
              <option>Wyoming</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="zip">ZIP*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.zip}
              type="text"
              name="zip"
              id="zipId"
              placeholder="80202"
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.phone}
              type="text"
              name="phone"
              id="phoneId"
              placeholder="303-555-5555"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.email}
              type="text"
              name="email"
              id="emailId"
              placeholder="hi@email.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="employment">Employment Status*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.employment}
              type="select"
              name="employment"
              id="employmentId"
            >
              <option>full-time</option>
              <option>part-time</option>
              <option>student</option>
              <option>unemployed</option>
              <option>other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="income">Income*</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.income}
              type="number"
              name="income"
              id="incomeId"
              placeholder="55000"
            />
          </FormGroup>
          <FormGroup>
            <Label for="info">Additional Information</Label>
            <Input
              onChange={props.handleInputChange}
              value={props.info}
              type="textarea"
              name="info"
              id="additonalInfoId"
              placeholder="Any other information you want the landlord to know."
            />
          </FormGroup>
          By clicking submit you are consenting to a criminal background
          check.&nbsp;&nbsp;&nbsp;
          <Button color="primary" onClick={props.handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ApplicationForm;

//TODO:
