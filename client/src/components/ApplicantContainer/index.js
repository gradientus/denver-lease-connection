import React, { Component } from 'react';
import './style.css';
import Select from '../SelectButton';
import { Col, Row, Table, Button } from 'reactstrap';

class index extends Component {
    render() {
        return (
            <div>
                <Row className='appTable'>


                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Property Name</th>
                                    <th>See Application</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Example</td>
                                    <td>Example</td>
                                    <td><Select></Select></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>


                </Row>
            </div>
        );
    }
}

export default index;