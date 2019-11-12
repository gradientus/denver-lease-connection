import React from "react";
import Navbar from "../Navbar";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

//TODO: Add the reactstrap stuff

const ApplicationForm = () => {
  return (
    <div>
      <Navbar />
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text  "
            name="firstName"
            id="firstNameId"
            placeholder="Hugh"
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text  "
            name="lastName"
            id="lastNameId"
            placeholder="Jaynus"
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Street Address</Label>
          <Input
            type="text  "
            name="address"
            id="addressId"
            placeholder="433 Main St. #2"
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text  "
            name="city"
            id="cityId"
            placeholder="Edgewater"
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="select" name="select" id="stateId">
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
          <Label for="exampleSelectMulti">ZIP</Label>
          <Input type="text" name="zip" id="zipId" placeholder="80203" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelectMulti">Phone</Label>
          <Input
            type="text"
            name="phone"
            id="phoneId"
            placeholder="555-555-5555"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelectMulti">Email</Label>
          <Input
            type="text"
            name="email"
            id="emailId"
            placeholder="hello@blobbly.com"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelectMulti">Employment Satus</Label>
          <Input type="select" name="select" id="employmentId">
            <option>full-time</option>
            <option>part-time</option>
            <option>student</option>
            <option>unemployed</option>
            <option>other</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelectMulti">Income</Label>
          <Input
            type="number"
            name="income"
            id="incomeId"
            placeholder="55000"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Additional Information</Label>
          <Input type="textarea" name="text" id="additonalInfoId" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default ApplicationForm;
