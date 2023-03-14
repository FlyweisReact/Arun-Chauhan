import HOC from "../../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";


const Privacy = () => {
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
              Add Privacy Policy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group className="mb-3">
                <Form.Label>Privacy Policy</Form.Label>
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
              All Privacy Policy
            </span>
            </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Privacy Policy</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
           <tr>
            <td> Privacy Policy</td>
            <td><i class="fa-solid fa-edit" onClick={() => setModalShow(true)} style={{color : 'blue'}}></i></td>
           </tr>
                 
            
              </tbody>
            </Table>
          </div>
        </section>
      </>
    );
  };
export default HOC(Privacy)