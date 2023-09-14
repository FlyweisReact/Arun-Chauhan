/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const OrderHistory = () => {
  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `https://arunchauhan-backend.vercel.app/api/order`
      );
      setData(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <p style={{ color: "black", fontSize: "18px" }}> All Orders </p>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <th>User</th>
          <th>Items Price</th>
          <th>Shipping Price</th>
          <th>Tax Price</th>
          <th>Total Price</th>
          <th>Paid</th>
          <th>Delivered</th>
          <th>Grand Total</th>
          <th>Status</th>
        </thead>
        <tbody>
          {data?.map((i, index) => (
            <tr key={index}>
              <td> {i.user} </td>
              <td> {i.itemsPrice} </td>
              <td> {i.shippingPrice} </td>
              <td> {i.taxPrice} </td>
              <td> {i.totalPrice} </td>
              <td> {i.isPaid === true ? "Yes" : "No"} </td>
              <td> {i.isDelivered === true ? "Yes" : "No"} </td>
              <td> {i.grandTotal} </td>
              <td> {i.Status} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(OrderHistory);
