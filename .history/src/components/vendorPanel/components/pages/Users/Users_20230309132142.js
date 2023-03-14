/** @format */

import React, { useEffect, useState } from "react";
import { Table , Modal , Form , Button} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const Users = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);


  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/DailyPassRouter/getPassByAdmin"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const deleteData = async (id) => {
    try{
      const { data } = await axios.delete(`https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/customerRouter/deleteAdmin/${id}`)
      console.log(data.message)
      toast.success('User Deleted')
      fetchData()
    }catch(err){
      console.log(err)
    }
  }

  function MyVerticallyCenteredModal(props) {

    const [ Pass , setPass ] = useState("")

    const postHandler = async (e) => {
      e.preventDefault()
      try{  
        const { data } = await axios.post("https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/DailyPassRouter/createPassByAdmin" , {Pass})
        alert(data.msg)
        props.onHide()
        fetchData()
      }catch(e) {
        console.log(e)
      }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Pass
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler} >
            <Form.Group className="mb-3">
              <Form.Label>Pass</Form.Label>
              <Form.Control type='text' onChange={(e) => setPass(e.target.value)} /> 
            </Form.Group>
            <Button type='submit'>Submit</Button>
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
            All Passes
          </span>
           <Button  onClick={() => setModalShow(true)}>
            Add Pass
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Pass</th>
               
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.Pass} </td>
                  <td>
                    <i
                      class="fa-sharp fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteData(i._id)}
                    ></i>
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


export default HOC(Users);
