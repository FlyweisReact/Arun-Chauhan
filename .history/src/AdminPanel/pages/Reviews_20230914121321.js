/** @format */

import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import HOC from "../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";

const Reviews = () => {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://arunchauhan-backend.vercel.app/api/review"
      );
      setData(data.data);
      setDataCount(data.data.length);
    } catch (e) {
      console.log(e);
      toast.error("Try Again after some time ::");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const putHandler = async (id) => {
    try {
      const { data } = await axios.post(
        `https://arunchauhan-backend.vercel.app/api/review/${id}`
      );
      console.log(data);
      toast.success("Changed");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Reviews ( Total : {dataCount})
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>Sno.</td>
                <th> UserName</th>
                <th> Review</th>
                <th> Rating</th>
                <th> Product</th>
                <th> Accept/Deny</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.userId?.name} </td>
                  <td> </td>
                  <td> {i.rating} </td>
                  <td> {i.productId?.productName} </td>
                  <td> {i.status === false ? "Denied" : "Accepted"} </td>
                  <td>
                    <Button
                      onClick={() => {
                        putHandler(i._id);
                      }}
                    >
                      Change Status
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Reviews);
