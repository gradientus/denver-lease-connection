import React from 'react';
import './style.css';
import { Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';




const index = props => {

    // console.log(props);
    return (


        <>
            <Row >
                <Col></Col>
                <Col className="headingText">
                    Fill out listing information to add a new listing:
        </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <InputGroup>
                        <InputGroupAddon addonType='prepend'><Button>Upload Photo</Button></InputGroupAddon>
                        <Input />
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>

            {/* Input for propertyName */}
            <Row>
                <Col></Col>
                <Col>
                    <InputGroup>
                        <Input
                            type="text"
                            value={props.propertyName}
                            onChange={props.handleInputChange}
                            name="propertyName"
                            placeholder="Property Name or Street Address"
                        />
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>

            {/* Input for property details */}
            <Row>
                <Col></Col>
                <Col>
                    <InputGroup>
                        <Input
                            type="text"
                            value={props.details}
                            onChange={props.handleInputChange}
                            name="details"
                            placeholder="Property Details"
                        />
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>

            {/* Input for price */}
            <Row>
                <Col></Col>
                <Col>
                    <InputGroup>
                        <Input
                            type="text"
                            value={props.price}
                            onChange={props.handleInputChange}
                            name="price"
                            placeholder="Monthly rental amount"
                        />
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>

            {/* Submit button */}
            <Row>
                <Col></Col>
                <Col>
                    <Button color="secondary" size="lg" block onSubmit={props.handleFormSubmit}>
                        Add Listing
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </>

    );
};

export default index;