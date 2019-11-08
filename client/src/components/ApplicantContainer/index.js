import React, { Component } from 'react';
import './style.css';
import Select from '../SelectButton';

class index extends Component {
    render() {
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Property Id</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark Jacobs</td>
                            <td>Prince St</td>
                            <td><Select /></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Gary Smith</td>
                            <td>Prince St</td>
                            <td><Select /></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Rebecca Turner</td>
                            <td>Colorado Blvd</td>
                            <td><Select /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default index;