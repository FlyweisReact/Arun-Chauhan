import HOC from "../../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";


const CurrentPass = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
       "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/currentPass/getallcurrentPassByAdmin"
        );
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    function MyVerticallyCenteredModal(props) {
      const [pass , setPass  ] = useState("")
      const [QR_code , setCode ] = useState("")
  
      const postData = async (e) => {
        e.preventDefault();
      
          try {
            const { data } = await axios.post(
              "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/currentPass/currentPasstouserByAdmin",
              { pass , QR_code }
            );
            console.log(data)
            props.onHide();
            fetchData();
            alert('Current Pass Added')
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
              Add Current Pass
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postData}>
              <Form.Group className="mb-3">
                <Form.Label>Pass</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setPass(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>QR Code</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setCode(e.target.value)}
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
  
    const deleteData = async (id) => {
      try{
        const { data } = await axios.delete(`https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/currentPass/deletecurrentPassByAdmin/${id}`)
      console.log(data)
        fetchData()
        alert('Deleted SuccessFully ')
      }catch(err){
        console.log(err)
      }
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
              Current Passes
            </span>
            <Button variant="outline-success" onClick={() => setModalShow(true)}>
              Add Curent Pass
            </Button>
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Pass </th>
                  <th> QR Code </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((i, index) => (
                  <tr key={index}>
                    <td> {i.pass} </td>
                    <td> {i.QR_code} </td>
                    <td>
                    <i class="fa-sharp fa-solid fa-trash" style={{color : 'red' }} onClick={() => deleteData(i._id)}></i>
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
  
  

export default HOC(CurrentPass)