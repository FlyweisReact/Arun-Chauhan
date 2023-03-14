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
              <th>Date</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr>
                <td>Customer</td>
                <td>product</td>
                <td>5,000</td>
                <td>12/02/2023</td>
                <td>Online</td>
                <td>Success</td>
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