/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import {  useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const Transaction = () => {
  const [modalShow, setModalShow] = React.useState(false);



  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Bus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
               
              />
            </Form.Group>
      

            <Button type="submit">Submit</Button>
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
            About Us
          </span>
          <Button  onClick={() => setModalShow(true)}>Add Bus</Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto", margin: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Title </th>
                <th> Wiating List</th>
                <th>Name</th>
                <th>Arrival</th>
                <th>Destination</th>
                <th>Date</th>
                <th>No. of Seats</th>
                <th>Pass</th>
                <th>Boarding Points</th>
                <th>Droping Point</th>
                <th>arrival time</th>
                <th>destination time</th>
                <th>Why Book this</th>
                <th>Driver Name</th>
                <th>Ratings Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Transaction);
