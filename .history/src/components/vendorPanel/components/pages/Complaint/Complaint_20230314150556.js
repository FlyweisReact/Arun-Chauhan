/** @format */
import React, {  useState } from "react";
import { Table , Modal ,Button , Form} from "react-bootstrap";
import HOC from "../../layout/HOC";



const Complaint = () => {
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
            Update Help&Support
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
              />
          </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
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
          All Periodic Service
          </span>
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
                <th>Incl</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
           
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};


export default HOC(Complaint);