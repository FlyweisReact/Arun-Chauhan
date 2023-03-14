import React from 'react'
import HOC from '../layout/HOC'
import { Form, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Tour = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [ id , setId ] = useState("")

    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/walletRouter/getWalletAll"
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
      const [ add , setAdd ] = useState('')
      const [ balance , setBalance ] = useState("")

      const postData = async (e) => {
        e.preventDefault()
        try{
          if(add === 'add' ) { 
              const { data } = await axios.post(`https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/walletRouter/addandremoveMoneyinadmin/${id}` , {
                addbalance : balance
              })
              console.log(data)
              fetchData()
              toast.success('Amount Added')
          }else{
            const { data } = await axios.post(`https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/walletRouter/addandremoveMoneyinadmin/${id}` , {
              removebalance : balance
            })
            console.log(data)
            fetchData()
            toast.success('Amount Deducted')
          }
         props.onHide()
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
              Add / Remove Balance
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postData}>
              <Form.Group className='mb-3'>
              <Form.Select aria-label="Default select example" onChange={(e) => setAdd(e.target.value)}>
      <option>Add or Remove</option>
      <option value="add">Add</option>
      <option value="remove">Remove</option>
    </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Amount</Form.Label>
                  <Form.Control type='number' min={0} onChange={(e) => setBalance(e.target.value)}  />
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
              All Wallets
            </span>
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> User</th>
                  <th> Balance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((i, index) => (
                  <tr key={index}>
                    <td> {i.name} </td>
                    <td> {i.balance} </td>
                  
                    <td>
                      <i
                        class="fa-sharp fa-solid fa-edit"
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => {
                          setId(i.user)
                          setModalShow(true)}}
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

export default HOC(Tour)