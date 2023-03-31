/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const About = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/about"
      );
      setData(data.message);
      setDataCount(data.message.length);
    } catch (e) {
      console.log(e);
      toast.error("Try again after some time::");
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();

      try {
        const { data } = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/about",
          { title, desc }
        );

        toast.success(`${data.message.title} Added`);
        fetchHandler();
        props.onHide();
      } catch (e) {
        console.log(e);
        toast.error("Try again after some time::");
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
            Add ABout Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>TItle</Form.Label>
              <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" onChange={(e) => setDesc(e.target.value)}  />
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
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/about/${id}`
      );
      console.log(data)
      toast.success('Deleted')
      fetchHandler();
    } catch (e) {
      console.log(e);
      toast.error('Try again after some time:::')
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
            About Us ( Total : {dataCount})
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add{" "}
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto", margin: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sno. </th>
                <th> Title </th>
                <th> Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.title} </td>
                  <td> {i.desc} </td>
                  <td>
                    <i
                      class="fa-solid fa-trash fa-beat-fade"
                      style={{ color: "#ff0000", cursor: "pointer" }}
                      onClick={() => deleteHandler(i._id)}
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

export default HOC(About);
