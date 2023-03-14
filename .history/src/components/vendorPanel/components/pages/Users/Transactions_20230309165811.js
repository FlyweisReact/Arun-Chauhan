import React, { useEffect, useState } from "react";
import { Table} from "react-bootstrap";
import axios from "axios";
import HOC from "../../layout/HOC";

const Transactions = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
      try {
        const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/paymentRouter/users/getAllPaymentsByAdmin"
        );
        setData(data.details);
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
              All Transaction (Total : {data.length})
            </span>
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> User Name</th>
                  <th>Amount</th>
                  <th>Invoice point</th>
                  <th>Status</th>
                  <th>Receipti</th>
                  <th>Amount Paid</th>
                  <th>Name</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
               {data?.map(( i ,index) => (
                <tr key={index} >
                  <td> {i.userName} </td>
                  <td> {i.amount} </td>
                  <td> {i.invoice} </td>
                  <td> {i.status === false ? "Cancelled" : 'Done'} </td>
                  <td> {i.receipt} </td>
                  <td> {i.amount_paid} </td>
                  <td> {i.name} </td>
                  <td> {i.orderStatus} </td>
                </tr>
               ))}
              </tbody>
            </Table>
          </div>
        </section>
      </>
    );
  };

export default HOC(Transactions)