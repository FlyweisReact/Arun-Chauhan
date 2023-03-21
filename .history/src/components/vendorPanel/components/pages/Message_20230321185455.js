/** @format */
import HOC from "../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";


const MSG = () => {
  const [modalShow, setModalShow] = useState(false);

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
            Add Notification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" />
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
            All Notification
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Title </th>
                <th> Message </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                </td>
                <td>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                </td>
                <td>
                  <i class="fa-solid fa-trash" style={{ color: "red" }}>
                    {" "}
                  </i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(MSG);
