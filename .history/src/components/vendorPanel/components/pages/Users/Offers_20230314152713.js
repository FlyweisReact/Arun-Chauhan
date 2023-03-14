/** @format */
import { Button, Modal, Form, Table } from "react-bootstrap";
import React, { useState } from "react";
import HOC from "../../layout/HOC";

const Offers = () => {
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
            Add Category
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
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const data = [
    {
      img: "https://static.vecteezy.com/system/resources/previews/005/081/938/original/classic-car-illustration-american-muscle-car-free-vector.jpg",
      title: "Servies and Detailing",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyX1G6KH2hFEYOPb4KDkmGqcBIOYDeoFC4uAkiWTOdCHy0B7B1bZdwHMOBUAqAp0l1lc&usqp=CAU",
      title: "Mechanical Services",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/016/674/151/small_2x/red-muscle-car-illustration-free-vector.jpg",
      title: "Value Add Services",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/005/081/938/original/classic-car-illustration-american-muscle-car-free-vector.jpg",
      title: "Accessories",
    },
  ];

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Categories
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add Categories
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Image</th>
                <th> Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => (
                <tr key={index}>
                  <td>
                    <img src={i.img} alt={i.title} style={{ width: "100px" }} />
                  </td>
                  <td> {i.title} </td>
                  <td>
                    <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
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

export default HOC(Offers);
