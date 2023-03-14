/** @format */

import React from 'react'
import HOC from '../../layout/HOC';
import { Table} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function Specification() {
  const [data, setData] = useState([]);
  const vendorId = localStorage.getItem("vendorId")
  
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
      `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/paymentRouter/getAllpaymentByvendor/63ca877e8f95721467c65621`
      );
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Transactions
          </span>
        
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Order Status</th>
                <th>Status</th>
                <th>Invoice</th>
                <th>User</th>
                <th>Package</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.orderStatus} </td>
                  <td> {i.status === false ? 'false' : 'true'} </td>
                  <td> {i.invoice} </td>
                  <td> {i.userObject?.name} </td>
                  <td> {i.package?.touristDestination} </td>
                  <td> {i.package?.price} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};


export default HOC(Specification);
