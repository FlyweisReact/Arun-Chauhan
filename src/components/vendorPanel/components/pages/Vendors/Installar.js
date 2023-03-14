import React from 'react'
import {Table } from 'react-bootstrap'
import HOC from '../../layout/HOC';

const Installar = () => {
    return (
        <>
          <p style={{ color: "black", fontSize: "18px" }}> All Installers </p>
    
          <Table striped bordered hover style={{ marginTop: "2%" }}>
            <thead>
              <th>Name </th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gst No.</th>
              <th>Address</th>
              <th>Pan Number</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>4512451245</td>
                <td>Gst Number</td>
                <td>Address</td>
                <td>pan Number </td>
                <td>
                <i class="fa-solid fa-trash" style={{color : 'red'}}></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      );
    };

export default HOC(Installar)