import React from 'react'
import {Table } from 'react-bootstrap'

const Installar = () => {
    return (
        <>
          <p style={{ color: "black", fontSize: "18px" }}> All Orders </p>
    
          <Table striped bordered hover style={{ marginTop: "2%" }}>
            <thead>
              <th>Name </th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gst No.</th>
              <th>Address</th>
              <th>Pan Number</th>
              <th>Delivery Status</th>
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
                <td>Pending</td>
                <td>
                <i class="fa-solid fa-pen-to-square" style={{color : 'blue'}}></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      );
    };

export default Installar