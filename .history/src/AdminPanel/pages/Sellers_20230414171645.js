/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import HOC from "../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sellers = () => {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");
  const token = localStorage.getItem("token");
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:1112/api/seller",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data.data);
      setDataCount(data.data.length);
    } catch (e) {
      console.log(e);
      toast.error("Try Again after some time ::");
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:1112/api/seller",
          { name, email, password },
          {
            headers: {
              Authorization: `Bearer ${token} `,
            },
          }
        );
        toast.success(`${data.data.name} Added`);
        fetchData();
        props.onHide();
      } catch (e) {
        console.log(e);
        toast.error(e.response.data.message);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Seller
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Free Product Count</Form.Label>
              <Form.Control type='number' min={0} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Per Product Price</Form.Label>
              <Form.Control type='number' min={0} />
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:1112/api/seller/${id}`
      );
      console.log(data);
      fetchData();
      toast.success("Deleted");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Seller's ( Total : {dataCount})
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Seller{" "}
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>Sno.</td>
                <th> Name</th>
                <th> Email</th>
                <th> Products</th>
                <th>Free Product Count</th>
                <th>Per Product Price</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.name} </td>
                  <td> {i.email} </td>
                  <td>
                    <button
                      className="viewBtn"
                      onClick={() => navigate(`/seller/products/${i._id}`)}
                    >
                      View
                    </button>
                  </td>
                  <td> {i.count} </td>
                  <td>{i.product_price</td>
                  <td>
                    {" "}
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "#ff0000", cursor: "pointer" }}
                      onClick={() => deleteHandler(i._id)}
                    ></i>{" "}
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

export default HOC(Sellers);
