/** @format */

import HOC from "../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const VendorSubCategory = () => {
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
              <Form.Control
                type="file"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                required
              >
                <option>Select Category</option>
          
              </Form.Select>
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
            All Sub-Categories (Total : 1)
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
                <th>Sno.</th>
                <th> Image</th>
                <th> Title</th>
                <th> Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            <tr>
            <td>1</td>
              <td>
              <img
                      src='https://www.pixelstalk.net/wp-content/uploads/images6/Dark-Anime-Wallpapers-Desktop.jpg'
                      alt=''
                      style={{ width: "100px" }}
                    />
              </td>
              <td> Lorem Ipsum</td>
              <td> Lorem Ipsum</td>
              <td>
                    <i
                      class="fa-solid fa-trash fa-beat-fade"
                      style={{ color: "#ff0000", cursor: "pointer" }}
                    ></i>
                  </td>
            </tr>
          
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(VendorSubCategory);
