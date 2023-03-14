import React from 'react'
import { Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const OrderHistory = () => {
    return (
        <>
          <p style={{ color: "black", fontSize: "18px" }}> All Orders </p>
    
          <Table striped bordered hover style={{ marginTop: "2%" }}>
            <thead>
              <th>Customer </th>
              <th>Product</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
            </thead>
            <tbody>
              <tr>
                <td>Customer</td>
                <td>
                  <p style={{ maxWidth: "400px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make
                  </p>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      );
    };

export default HOC(OrderHistory)