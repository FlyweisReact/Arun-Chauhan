/** @format */

import HOC from "../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const HelpSupport = () => {
  const [modalShow, setModalShow] = useState(false);

  const [data, setData] = useState([]);
  const [datCount, setDataCount] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/help"
      );
      setData(data.result);
      setDataCount(data.result.length);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/help/${id}`
      );
      toast.success(data.message);
      fetchData();
    } catch (e) {
      console.log(e);
      toast.error("Try again after some time:::");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/help/",
          { name, email }
        );
        toast.success(`${data.message.name} Added`);
        fetchData();
        props.onHide();
      } catch (e) {
        console.log(e);
        toast.error("Please try again after some time::");
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
            Add Help&Support
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
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
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
            All Help&Support ( Total : {datCount})
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Help&Support
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Sno.</th>
                <th> Name</th>
                <th> Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
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

export default HOC(HelpSupport);
