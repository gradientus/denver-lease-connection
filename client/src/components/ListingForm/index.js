import React from 'react';
import './style.css';
import { Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const index = () => {
    return (
        <div>
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

            <Row>
                <Col></Col>
                <Col>
                    <InputGroup>
                        <Input placeholder="Property Name or Street Address" />
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <InputGroup>
                        <Input placeholder="Property Details" />
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <InputGroup>
                        <Input placeholder="Monthly rental amount" />
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <Button color="secondary" size="lg" block>Add Listing</Button>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default index;