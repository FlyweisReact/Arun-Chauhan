import HOC from "../../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



const Terms = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/termsAndConditionsRouter/termsAll"
        );
        setData(data.terms);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    function MyVerticallyCenteredModal(props) {
      const [name, setName] = useState("");
  
      const postData = async (e) => {
        e.preventDefault();
          try {
            const { data } = await axios.put(
              "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/termsAndConditionsRouter/Updateterms/63eca1c278fc16e1742d9829",
              { terms : name }
            );
            console.log(data)
            toast.success("privacy updated");
            props.onHide();
            fetchData();
          } catch (err) {
            console.log(err);
          }
       
      };
  
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Privacy Policy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postData}>
              <Form.Group className="mb-3">
                <Form.Label>Privacy Policy</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setName(e.target.value)}
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
               Terms&Conditions
            </span>
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Terms & Condition </th>
              
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td> {data?.[0]?.terms} </td>
                  
                    <td>
                    <i class="fa-solid fa-pen-to-square" style={{color : 'blue'}} onClick={() => setModalShow(true)} ></i>
                    </td>
                  </tr>
            
              </tbody>
            </Table>
          </div>
        </section>
      </>
    );
  };

export default HOC(Terms)