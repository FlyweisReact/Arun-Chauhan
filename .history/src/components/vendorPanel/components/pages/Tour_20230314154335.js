/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Form, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Tour = () => {
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
            Add Product
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
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Features</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" min={0} />
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
            All Products
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Product
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Image </th>
                <th> Title</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Features</th>
                <th>Features</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Carousel
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    dynamicHeight={false}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                    interval={1000}
                    infiniteLoop={true}
                    autoPlay={true}
                    className='Car'
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
                      alt=""
                       className="carouselImages"
                    />
                    <img
                      src="https://www.teahub.io/photos/full/8-83091_hd-wallpapers-1080p-widescreen-free-download-top-hdq.jpg"
                      alt=""
                      className="carouselImages"
                    />
                  </Carousel>
                </td>
                <td>Black & Red Strike Leather</td>
                <td>Seat Cover</td>
                <td>₹7,999</td>
                <td>
                  <ul>
                    <li>Non-Returnable</li>
                    <li>Free Installation</li>
                  </ul>
                </td>
                <td>
                  <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Tour);
