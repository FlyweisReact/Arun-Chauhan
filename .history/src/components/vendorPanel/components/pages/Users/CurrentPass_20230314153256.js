/** @format */

import HOC from "../../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const CurrentPass = () => {
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
            Add Sub-Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>Select Category</option>
                <option>Servies and Detailing</option>
                <option>Mechanical Services</option>
                <option>Value Add Services</option>
                <option>Accessories</option>
              </Form.Select>
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
      subCat : "Steam Car Wash"
    },
    {

      img: "https://static.vecteezy.com/system/resources/previews/005/081/938/original/classic-car-illustration-american-muscle-car-free-vector.jpg",
      title: "Servies and Detailing",
      subCat : "Car spa & cleaning"
    },
    {

      img: "https://static.vecteezy.com/system/resources/previews/005/081/938/original/classic-car-illustration-american-muscle-car-free-vector.jpg",
      title: "Servies and Detailing",
      subCat : "Periodical Service"
    },
    {

      img: "https://static.vecteezy.com/system/resources/previews/005/081/938/original/classic-car-illustration-american-muscle-car-free-vector.jpg",
      title: "Servies and Detailing",
      subCat : "Detailing service" 
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyX1G6KH2hFEYOPb4KDkmGqcBIOYDeoFC4uAkiWTOdCHy0B7B1bZdwHMOBUAqAp0l1lc&usqp=CAU",
      title: "Mechanical Services",
      subCat : "AC service and repair"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyX1G6KH2hFEYOPb4KDkmGqcBIOYDeoFC4uAkiWTOdCHy0B7B1bZdwHMOBUAqAp0l1lc&usqp=CAU",
      title: "Mechanical Services",
      subCat : "Denting and painting"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyX1G6KH2hFEYOPb4KDkmGqcBIOYDeoFC4uAkiWTOdCHy0B7B1bZdwHMOBUAqAp0l1lc&usqp=CAU",
      title: "Mechanical Services",
      subCat : "Custom and repair"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyX1G6KH2hFEYOPb4KDkmGqcBIOYDeoFC4uAkiWTOdCHy0B7B1bZdwHMOBUAqAp0l1lc&usqp=CAU",
      title: "Mechanical Services",
      subCat : "AC service and repair"
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/016/674/151/small_2x/red-muscle-car-illustration-free-vector.jpg",
      title: "Value Add Services",
    },
    {
      img: "https://static4.depositphotos.com/1022970/360/v/600/depositphotos_3600440-stock-illustration-american-car.jpg",
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
            All Sub-Categories
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add Sub-Categories
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Image</th>
                <th> Title</th>
                <th> Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => (
                <tr key={index}>
                  <td>
                    <img src={i.img} alt={i.title} style={{ width: "100px" }} />
                  </td>
                  <td> {i.subCat} </td>
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

export default HOC(CurrentPass);
