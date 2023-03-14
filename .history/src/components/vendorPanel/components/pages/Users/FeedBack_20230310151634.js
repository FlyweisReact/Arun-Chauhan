/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const FeedBack = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/feedback/getallfeedbackByAdmin"
      );
      setData(data)
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <p style={{ color: "black", fontSize: "18px" }}> All Feedbacks </p>

      <Table striped bordered hover style={{marginTop : '2%'}}>
        <thead>
          <th>Rating</th>
          <th>Description</th>
        </thead>
        <tbody>
            {data?.data?.map((i , index) => (
                <tr key={index}>
                    <td> {i.rating} </td>
                    <td> {i.desc} </td>
                </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(FeedBack);
