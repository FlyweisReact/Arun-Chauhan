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

      <div style={{ maxWidth: "100%", overflow: "auto" }}>
      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <th style={{padding : '5px'}} >User</th>
          <th style={{padding : '5px'}}>Items Price</th>
          <th style={{padding : '5px'}}>Shipping Price</th>
          <th style={{padding : '5px'}}>Tax Price</th>
          <th style={{padding : '5px'}}>Total Price</th>
          <th style={{padding : '5px'}}>Paid</th>
          <th style={{padding : '5px'}}>Delivered</th>
          <th style={{padding : '5px'}}>Grand Total</th>
          <th style={{padding : '5px'}}>Product / Services</th>
        </thead>
        <tbody>
          {data?.map((i, index) => (
            <tr key={index}>
              <td> {i.user?.name} </td>
              <td> ₹{i.itemsPrice} </td>
              <td> ₹{i.shippingPrice} </td>
              <td> ₹{i.taxPrice} </td>
              <td> ₹{i.totalPrice} </td>
              <td> {i.isPaid === true ? "Yes" : "No"} </td>
              <td> {i.isDelivered === true ? "Yes" : "No"} </td>
              <td> ₹{i.grandTotal} </td>
              <td>
                <ul>
                  {i.products?.map((item) => (
                    <li> {item?.product?.productName} </li>
                  ))}
                  {i.services?.map((item) => (
                    <li> {item?.services?.serviceName} </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(OrderHistory);
