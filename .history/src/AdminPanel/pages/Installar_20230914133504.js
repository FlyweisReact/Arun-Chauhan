/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Modal, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";
import {AiFillEye } from 'react-icons/ai'
import { FaTrash } from "react-icons/fa";

const Installar = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://arunchauhan-backend.vercel.app/api/installer/all"
      );
      setData(data.result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://arunchauhan-backend.vercel.app/api/installer/${id}`
      );
      console.log(data);
      toast.success("Deleted");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  // View Modal
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
            View Installer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div className="bigCont">
              <p className="contP">Name : Lorem ipsum </p>
              <p className="contP">Mobile Number : Lorem ipsum</p>
            </div>
            <div className="bigCont">
              <p className="contP">Email : Lorem ipsum </p>
              <p className="contP">Serivces : Lorem ipsum</p>
            </div>
            <div className="bigCont">
              <p className="contP">Address : Lorem ipsum</p>
            </div>
          </Container>
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
      <p style={{ color: "black", fontSize: "18px" }}>
        {" "}
        All Installers {data?.length}{" "}
      </p>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <th>Sno. </th>
          <th>Image </th>
          <th>Name </th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Services</th>
          <th>Address</th>
          <th>Transaction</th>
          <th>Action</th>
        </thead>
        <tbody>
          {data?.map((i, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td>
                <img src={i.image} alt={i.name} style={{ width: "100px" }} />
              </td>
              <td> {i.name} </td>
              <td> {i.email} </td>
              <td> {i.mobile} </td>
              <td>
                {" "}
                {i.servies?.map((s, index) => (
                  <p key={index}> {s} </p>
                ))}{" "}
              </td>
              <td> {i.location?.address} </td>
              <td>
                <button
                  className="viewBtn"
                  onClick={() => navigate(`/installer-transaction/${i._id}`)}
                >
                  View
                </button>
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    paddingTop: "10px",
                  }}
                >
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteHandler(i._id)}
                  ></i>
                  <AiFillEye  class="fa-solid fa-eye"
                    style={{ color: "#4581e8", cursor: "pointer" }}
                    onClick={() => setModalShow(true)}/>
                  <i
                    
                  ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Installar);
