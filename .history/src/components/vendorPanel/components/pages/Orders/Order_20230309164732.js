/** @format */

import React, { useEffect, useState } from "react";
import { Table} from "react-bootstrap";
import axios from "axios";
import HOC from "../../layout/HOC";

const Order = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
      "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/BookingRouter/getbookingByAdmin"
      );
      setData(data);
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
            All Bookings (Total : {data.length})
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Seat</th>
                <th>BoardingPoint</th>
                <th>Droping point</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Name</th>
                <th>Age</th>
                <th>Cancelled</th>
                <th>Amount</th>
                <th>Passenger Name</th>
                <th>Status</th>
                <th>Ticket </th>
              </tr>
            </thead>
            <tbody>
             {data?.map(( i ,index) => (
              <tr key={index} >
                <td> {i.Seat} </td>
                <td> {i.BoardingPoint} </td>
                <td> {i.DropingPoint} </td>
                <td> {i.data?.name} </td>
                <td> {i.Email} </td>
                <td> {i.MobileNO} </td>
                <td> {i.Name} </td>
                <td> {i.Age} </td>
                <td> {i.cancelled === false ? 'Cancel' : 'Done'} </td>
                <td> {i.amount} </td>
                <td> {i.passengerData?.name} </td>
                <td> {i.Status} </td>
                <td> {i.ticketConfirm} </td>

              </tr>
             ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Order);
