/** @format */

import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";

const UserKundli = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/populartourRouter/getAllpopulartourVendor"
      );
      setData(data.getAllpopulardestination);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/populartourRouter/deletepopulartourVendor/${id}`
      );
      console.log(data.message);
      toast.success("Vendor Deleted");
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [country, setCountry] = useState("");
    const [touristDestination, setDestination] = useState("");
    const [city, setCity] = useState("");

    const postData = async (e) => {
      e.preventDefault()
      try {
        const { data } = await axios.post(
          "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/populartourRouter/populartourVendor",
          { country, touristDestination, city }
        );
        console.log(data)
        toast.success("Tour Added")
        props.onHide()
               fetchData()
      } catch (err) {
        console.log(err);
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
          <Modal.Title id="contained-modal-title-vcenter">Add Tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text"  onChange={(e) => setCountry(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text"  onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Destination</Form.Label>
              <Form.Control type="text"  onChange={(e) => setDestination(e.target.value)} />
            </Form.Group>
            <Button variant="outline-success" type='submit'>Submit</Button>
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
            All Tours
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Tour
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> City</th>
                <th> Country</th>
                <th>Tour Destinatiomn</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.city} </td>
                  <td> {i.country} </td>
                  <td>
                    {" "}
                    {i.touristDestination?.map((i, index) => (
                      <p key={index}> {i} </p>
                    ))}{" "}
                  </td>
                  <td>
                    <i
                      class="fa-sharp fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteData(i._id)}
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
export default HOC(UserKundli);
