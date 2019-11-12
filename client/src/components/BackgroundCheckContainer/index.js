import React, { Component } from 'react';
import './style.css';
import { Col, Row, Table } from 'reactstrap';

class index extends Component {
    render() {
        return (
            <div>
                <Row>

                    <Col sm="12" md={{ size: 4, offset: 4 }}>
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Applicant Information</th>
                                </tr>
                            </thead>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 4, offset: 4 }}>
                        <p>Applicant Data will go here</p>
                        <p>Such as name, address, phone, email</p>
                    </Col>
                </Row>



                <Row>

                    <Col sm="12" md={{ size: 4, offset: 4 }}>
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Background Check</th>
                                </tr>
                            </thead>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 4, offset: 4 }}>
                        <p>Background check data will go here</p>
                        <p>Information from background check / or 'no records found' if no data is returned</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default index;