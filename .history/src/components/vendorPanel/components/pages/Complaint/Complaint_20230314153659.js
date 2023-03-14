/** @format */
import React, { useState } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";

const Complaint = () => {
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);

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
            {edit ? "Add What's Include" : "Add Periodic Service"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {edit ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Include</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          ) : (
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
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Discount</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Include Image</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Include Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Free Service</Form.Label>
                <Form.Control type="text" />
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
              <Form.Select aria-label="Default select example">
                <option>Select Sub-Category</option>
                <option>Periodical Services</option>
                <option>Car span & cleaning</option>
              </Form.Select>
            </Form.Group>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          )}
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
            All  Services
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Add  Service
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Image</th>
                <th> Title</th>
                <th> Price</th>
                <th> Discount (off)</th>
                <th>Rating</th>
                <th>What It'sInclude</th>
                <th>Free Srvices</th>
                <th>Sub-Category</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/carrepair1.jpg"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </td>
                <td>Complete Car Service</td>
                <td>₹3,999</td>
                <td>475</td>
                <td>4.5</td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <img
                      src="https://content.jdmagicbox.com/comp/def_content/car-repair-and-services/shutterstock-298682093-car-repair-and-services-19-b1mua.jpg"
                      alt=""
                      style={{ width: "100px" }}
                    />
                    <p style={{ fontSize: "12px", maxWidth: "300px" }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", gap: "10px", marginTop: "20px" }}
                  >
                    <img
                      src="https://content.jdmagicbox.com/comp/def_content/car-repair-and-services/shutterstock-298682093-car-repair-and-services-19-b1mua.jpg"
                      alt=""
                      style={{ width: "100px" }}
                    />
                    <p style={{ fontSize: "12px", maxWidth: "300px" }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1
                    </p>
                  </div>
                </td>
                <td>
                  <ul>
                    <li>Free Pick & Drop</li>
                    <li>Service at autocare certified garage</li>
                  </ul>
                </td>
                <td>Priodic Service</td>
                <td>Service and Detailing</td>
                <td>
                  <div style={{ display: "flex ", gap: "10px" }}>
                    <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                    <i class="fa-solid fa-edit" style={{ color: "blue" }} onClick={() => {
              setEdit(true);
              setModalShow(true);
            }}></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Complaint);
