import HOC from "../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const InstallerTransactions = () => {

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
            Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Complete</option>
                <option value="2">Pending</option>
                <option value="3">Failed</option>
              </Form.Select>
            </Form.Group>
            <Button>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
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
            All Transactions ( Total : 2)
          </span>
        </div>


            <div className="filterDate">
            <div>
                <p>Staring Date:</p>
                <input type='date' />
            </div>
            <div>
                <p>Ending Date:</p>
                <input type='date' />
            </div>
                    <button>Filter</button>
            </div>



        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SNo.</th>
                <th> User </th>
                <th> Email</th>
                <th>Mobile</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Commission</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td> Samantha </td>
                <td> Samantha@gmail.com </td>
                <td> 4521785695 </td>
                <td> ₹ 5,000 </td>
                <td>12/02/2023</td>
                <td>Online</td>
                <td>Complete</td>
                <td>200 Ruppes</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#005eff" , cursor : 'pointer'}}
                    onClick={() => setModalShow(true)}
                  ></i>
                </td>
              </tr>
              <tr>
                <td> 1 </td>
                <td> Sophia </td>
                <td> Sophia@gmail.com </td>
                <td> 4521785695 </td>
                <td> ₹ 5,000 </td>
                <td>12/02/2023</td>
                <td>Online</td>
                <td>Complete</td>
                <td>flat 20%</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#005eff" , cursor : 'pointer' }}
                    onClick={() => setModalShow(true)}
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

export default HOC(InstallerTransactions)