/** @format */

import HOC from "../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Privacy = () => {
  const [modalShow, setModalShow] = useState(false);

  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/api/privacy"
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
    const [terms, setTerms] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/api/privacy",
          { privacy: terms }
        );
        console.log(data);
        toast.success("Added");
        fetchData();
        props.onHide();
      } catch (e) {
        console.log(e);
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
            Add Privacy Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Privacy Policy</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTerms(e.target.value)}
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

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/api/privacy/${id}`
      );
      console.log(data);
      toast.success("Deleted");
      fetchData();
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
            All Privacy Policy ( Total : {dataCount})
          </span>
          <Button onClick={() => setModalShow(true)}>Add</Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SNo.</th>
                <th> Privacy Policy</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.privacy} </td>
                  <td>
                    <i
                      class="fa-solid fa-trash"
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
export default HOC(Privacy);
