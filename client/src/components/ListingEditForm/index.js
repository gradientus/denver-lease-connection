import React from 'react';
import './style.css';
import { Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const index = (props) => {
    return (
        <>
            <Row >
                <Col></Col>
                <Col className="headingText">
                    Edit your listing
        </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <InputGroup>
                        <InputGroupAddon
                            addonType='prepend'><Button>Upload Photo</Button></InputGroupAddon>
                        <Input
                            placeholder="For future development"
                        />
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
                            default={props.propertyName}
                            onChange={props.handleEditChange}
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
                            default={props.details}
                            onChange={props.handleEditChange}
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
                            default={props.price}
                            onChange={props.handleEditChange}
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
                    <Button color="secondary" size="lg" block onClick={props.handleFormSubmit}>
                        Add Listing
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
};

export default index;