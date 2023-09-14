/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const OrderHistory = () => {
  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try{
      const { data } = await axios.get(`https://arunchauhan-backend.vercel.app/api/order`)
      setData(data)
    }catch{}
  }


  useEffect(() => {
    fetchHandler()
  },[])

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
        {data?.map(( i ,index) => (
          <tr key={index} >
            
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(OrderHistory);
