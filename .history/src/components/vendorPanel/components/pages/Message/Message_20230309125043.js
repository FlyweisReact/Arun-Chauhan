/** @format */
import HOC from "../../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const MSG = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/notificationRouter/getallusersByAdmin"
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
    const [message, setName] = useState("");

    const postData = async (e) => {
      e.preventDefault();
    
        try {
          const { data } = await axios.post(
            "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/notificationRouter/sendNotificationstouserByAdmin",
            { message }
          );
          toast.success(data.msg);
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
            Add Notification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
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

  const deleteData = async (id) => {
    try{
      const { data } = await axios.delete(`https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/notificationRouter/deleteNotificationByAdmin/${id}`)
    toast.success(data.message)
      fetchData()
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
            All Notification
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Message </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.message} </td>
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


export default HOC(MSG);
