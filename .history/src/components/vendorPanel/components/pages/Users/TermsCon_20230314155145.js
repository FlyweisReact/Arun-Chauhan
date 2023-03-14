import HOC from "../../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";


const TermsCon = () => {
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
              Add Terms&Condition
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Terms&Condtion</Form.Label>
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
              All Terms&Condition
            </span>
            <Button variant='outline-success' onClick={() => setModalShow(true)}>Add  Terms&Condition</Button>
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Terms&Condition</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
      
                <tr>
                  <td>Terms&Condition</td>
                  <td></td>
                </tr> 
            
              </tbody>
            </Table>
          </div>
        </section>
      </>
    );
  };

export default HOC(TermsCon)