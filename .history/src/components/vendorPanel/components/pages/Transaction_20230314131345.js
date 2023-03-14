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
    const [name, setName] = useState("");
    const [arrival, setArrival] = useState("");
    const [destination, setDestination] = useState("");
    const [arrival_time, setArrivalTime] = useState("");
    const [destination_time, setDestinationTime] = useState("");
    const [date, setDate] = useState("");
    const [NumberofSeats, setNumberofSeats] = useState("");
    const [Pass, setPass] = useState("");
    const [BoardingPoint, setBoardingPoint] = useState("");
    const [DropingPoint, setDropingPoint] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/FindBusRouter/createBusesInfoByAdmin",
          {
            name,
            arrival,
            destination,
            arrival_time,
            destination_time,
            date,
            NumberofSeats,
            Pass,
            BoardingPoint,
            DropingPoint,
          }
        );
        console.log(data);
        alert("Bus Created");
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
        alert(e.response.data.message)
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
          <Modal.Title id="contained-modal-title-vcenter">Add Bus</Modal.Title>
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
              <Form.Label>Arrival</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setArrival(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDestination(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Arrival time</Form.Label>
              <Form.Control
                type="time"
                onChange={(e) => setArrivalTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Destination time</Form.Label>
              <Form.Control
                type="time"
                onChange={(e) => setDestinationTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of Seats</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setNumberofSeats(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pass</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Boarding Point</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setBoardingPoint(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Droping Point</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setDropingPoint(e.target.value)}
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
            All Buses
          </span>
          <Button  onClick={() => setModalShow(true)}>Add Bus</Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto", margin: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Total Passenger</th>
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
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.totalPassenger} </td>
                  <td> {i.waitingList} </td>
                  <td> {i.name} </td>
                  <td> {i.arrival} </td>
                  <td> {i.destination} </td>
                  <td> {i.date} </td>
                  <td> {i.NumberofSeats} </td>
                  <td> {i.Pass} </td>
                  <td> {i.BoardingPoint?.map((item) => item)} </td>
                  <td> {i.DropingPoint?.map((item) => item)} </td>
                  <td>{i.arrival_time}</td>
                  <td> {i.destination_time} </td>
                  <td> {i.whyBookThisBus} </td>
                  <td>{i.DriverName}</td>
                  <td>{i.Rating_Review}</td>
                  <td>
                    <AiFillDelete
                      onClick={() => deleteHandler(i._id)}
                      style={{ color: "red" }}
                    />
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

export default HOC(Transaction);
