/** @format */

import React, { useState, useEffect } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import HOC from "../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";

const Reviews = () => {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/review"
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

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Acccept/Deny
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Accept</option>
                <option value="2">Deny</option>
              </Form.Select>
            </Form.Group>

            <Button>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
                  <td> {i.status === "false" ? "Denied" : "Accepted"} </td>
                  <td>
                    <i
                      class="fa-solid fa-pen-to-square"
                      style={{ color: "#005eff", cursor: "pointer" }}
                      onClick={() => setModalShow(true)}
                    ></i>
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
