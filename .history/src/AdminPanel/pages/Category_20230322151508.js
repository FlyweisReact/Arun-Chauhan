/** @format */
import { Button, Modal, Form, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";

const Category = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");

  function MyVerticallyCenteredModal(props) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();

      let fd = new FormData();
      fd.append("category", title);
      fd.append("myField", image);

      try {
        const { data } = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/category" , fd
        );
        console.log(data)
        fetchData()
        toast.success('Category Added')
        props.onHide()
      } catch (e) {
        console.log(e);
        toast.error(e.response.data.message);
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
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
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



  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/category"
      );
      setData(data.data);
      setDataCount(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => { 
    try { 
      const { data } = await axios.delete(`http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/category/${id}`)
      console.log(data)
      toast.success('Category Deleted')
      fetchData()
    }catch(e){
      console.log(e)
      toast.error('Try again after some time::')
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
            All Categories ( Total : {dataCount})
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add Categories
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Image</th>
                <th> Title</th>
                <th> Commission</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={i.categoryImg?.url}
                      alt={i.category}
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td> {i.category} </td>
                  <td>Flat 30%</td>
                  <td> 
                    <i class="fa-solid fa-trash" style={{ color: "red"  , cursor  : 'pointer'}} onClick={() => deleteHandler(i._id)} ></i>
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

export default HOC(Category);
