import React, { Component } from 'react';
import './style.css';
import EditBtn from '../EditButton';
import InactiveBtn from '../InactiveButton';
import { Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

class index extends Component {
    render() {
        return (

            <Col>
                <Card>
                    <CardHeader className='cardHeader'>Property Name</CardHeader>
                    <CardBody>
                        <img src="https://images.craigslist.org/00101_daosvbG18Yj_600x450.jpg" className="card-img-top" alt="placeholder" />
                        <p>This is a 2 Bedroom, 2 Bath, approximately 1082 Sq. Ft.</p>
                        <EditBtn />
                        <InactiveBtn />
                    </CardBody>
                    <CardFooter className='cardFooter'><strong>$1600 /mo</strong></CardFooter>
                </Card>
            </Col>

        );
    }
}

export default index;