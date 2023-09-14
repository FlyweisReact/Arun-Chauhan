/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const OrderHistory = () => {
  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try{
      const { data } = await axios.get(`https://arunchauhan-backend.vercel.app/api/order`)
    }catch{}
  }


  return (
    <>
      <p style={{ color: "black", fontSize: "18px" }}> All Orders </p>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <th>Customer </th>
          <th>Product</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Seller</th>
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
            <td>Seller</td>
            <td>Online</td>
            <td>Success</td>
            <td>Pending</td>
            <td>
              <i
                class="fa-solid fa-pen-to-square"
                style={{ color: "blue" }}
              ></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default HOC(OrderHistory);
