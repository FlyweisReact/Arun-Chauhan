/** @format */

import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import HOC from "../../layout/HOC";

const Transactions = () => {
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
          <Modal.Title id="contained-modal-title-vcenter">
            Add Banners
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
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
            All Banners
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Banners
          </Button>
        </div>

        <div className="three-Sec">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKN8SFyIQwhz-e1c0RnXIoSLcDScYNlxdHQ&usqp=CAU"
              alt=""
            />
            <p>Cars</p>
            <button>Delete</button>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKN8SFyIQwhz-e1c0RnXIoSLcDScYNlxdHQ&usqp=CAU"
              alt=""
            />
            <p>Cars</p>
            <button>Delete</button>
          </div>{" "}
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKN8SFyIQwhz-e1c0RnXIoSLcDScYNlxdHQ&usqp=CAU"
              alt=""
            />
            <p>Cars</p>
            <button>Delete</button>
          </div>{" "}
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKN8SFyIQwhz-e1c0RnXIoSLcDScYNlxdHQ&usqp=CAU"
              alt=""
            />
            <p>Cars</p>
            <button>Delete</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HOC(Transactions);
